import axios from 'axios';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';

// Configure and an instance of axios
export const avenueApi = axios.create({
  baseURL: process.env.GATSBY_AVENUE_API_URL,
  timeout: 60000,
  timeoutErrorMessage: 'Request Timeout: Please try again',
});

class Api {
  constructor() {
    if (!Api.instance) {
      Api.instance = this;
      this.avenueApi = avenueApi;
    }
  }

  // Get the singleton instance of the API
  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  async getEvents(event) {
    return this.avenueApi.get('/events', {
      params: { type: event, orgID: process.env.GATSBY_ORG_ID },
    });
  }

  async fetchUserDetails({ uid, accessToken }) {
    try {
      const { data: avenueUser } = await this.avenueApi.get('/user', {
        params: { uid },
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (avenueUser) {
        if (!avenueUser.festID.includes('innovision-2023') && !avenueUser.rollNumber) {
          toast.error('Kindly do the payment');
          navigate('/payment');
        }
      } else {
        toast.info('You are not registered for Innovision 2023. Please register to continue.');
        navigate('/register');
      }

      return avenueUser;
    } catch (error) {
      toast.error('Unable to fetch user details');
      return null;
    }
  }

  async registerUser({ accessToken, payload, sideEffects, uid }) {
    try {
      const { data: newUser, status } = await this.avenueApi
        .post(
          '/user',
          { uid, ...payload },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          },
        )
        .catch((error) => {
          throw new Error(error.response.data);
        });

      if (newUser.id && status === 200) {
        if (sideEffects) sideEffects(newUser);
      } else throw new Error('Error saving user');
    } catch (error) {
      toast.error(error?.message);
      if (error?.message === 'User with this roll number already registered')
        toast.info('Kindly use the email registered during previous fests to login');
      throw new Error('Error saving user');
    }
  }

  async initiatePayment({ purpose, buyerName, email, phone, amount, sideEffects, accessToken }) {
    try {
      const { data: generatedLink } = await this.avenueApi.post(
        '/payment/instamojo',
        {
          amount,
          purpose,
          buyerName,
          email,
          phone,
          redirectUrl: process.env.GATSBY_AVENUE_REDIRECT_URL || 'http://localhost:8000/payment',
          webhook: 'https://avenue-api.nitrkl.in/payment/webhook',
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (!generatedLink) {
        throw new Error('Something went wrong: Failed to generate payment link');
      }

      if (sideEffects) sideEffects(generatedLink);
      return generatedLink;
    } catch (error) {
      throw new Error(error.message || 'Something went Wrong, please try again');
    }
  }

  async verifyZimbra({ rollNumber, password, sideEffects }) {
    try {
      const { status } = await this.avenueApi.get('/zimbra-login', {
        params: {
          username: rollNumber,
          password,
        },
      });

      if (status === 200) {
        if (sideEffects) sideEffects();
      } else {
        throw new Error('Invalid Credentials');
      }

      return status;
    } catch (error) {
      throw new Error(error.message || 'Something went Wrong, please try again');
    }
  }

  async bookEvent({ userID, eventID, accessToken, sideEffects, final }) {
    try {
      const { data: registeredEvent } = await this.avenueApi.post(
        '/user/registration',
        {
          userID,
          eventID,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (registeredEvent.userID === userID) {
        if (sideEffects) sideEffects(registeredEvent);
      } else {
        throw new Error('Unable to register for event, please try again');
      }
    } catch (error) {
      toast.error(
        error?.response?.data || error.message || 'Something went Wrong, please try again',
      );
      throw new Error(
        error?.response?.data || error.message || 'Something went Wrong, please try again',
      );
    } finally {
      final();
    }
  }

  async fetchRegisteredEvents({ accessToken, userID, sideEffects }) {
    try {
      const { data: registeredEvents } = await this.avenueApi.get('/user/registration', {
        params: {
          userID,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const parsedEvents = registeredEvents
        .filter((event) => event.orgID.includes(process.env.GATSBY_ORG_ID))
        .map((event) => {
          const description = JSON.parse(event.description);
          const date = new Date(event.startDate);

          return {
            id: event.id,
            title: event.name,
            club: event.subHeading,
            date: date.getDate(),
            month: date.toDateString().split(' ')[1],
            time: `${date.getHours().toString().padStart(2, '0')}:${date
              .getMinutes()
              .toString()
              .padStart(2, '0')}`,
            description,
            contact: event.contact,
            venue: 'LA',
            prizes: event.prizeMoney,
            poster: event.poster ? event.poster : 'TODO://link',
          };
        })
        .sort((a, b) => +a.date - +b.date);

      if (sideEffects) sideEffects(parsedEvents);

      console.log(parsedEvents);

      return parsedEvents;
    } catch (error) {
      toast.error(
        error?.response?.data || error.message || 'Something went Wrong, please try again',
      );
      return [];
    }
  }
}

export default Api;
