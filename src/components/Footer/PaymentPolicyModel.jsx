// import { Modal, Overlay } from '../eventCardComponents/eventCard.style';
// import { ModalExit, ModalText } from './registerModal.styles';

// import { Modal } from "flowbite-react";
import { Paragraph, SmallParagraph } from '../shared/Typography/Paragraphs';
import { Modal, ModalExit, ModalText, Overlay, Para } from './styles';

export const PaymentPolicyModal = ({ isClose }) => {
  return (
    <>
      <Overlay>
        <Modal>
          <ModalText>Pricing</ModalText>
          <Para>
            The registration fees for Innovision 2024 is ₹899 for all the students from outside NIT
            Rourkela. There are no registration fees for students of NIT Rourkela.
          </Para>
          <ModalText>Refund Policy</ModalText>
          <Para>
            Thank you for registering at Innovision 2024. If, for any reason, you are not entirely
            satisfied with your purchase, we encourage you to review our refund and return policy.
          </Para>
          <ModalText>Your Registration Cancellation Rights</ModalText>
          <Para>
            There will be no refund of the registration fees under any circumstances unless the fest
            is cancelled by team Innovision.
          </Para>
          <ModalExit className='text-4xl' onClick={isClose}>
            close
          </ModalExit>
        </Modal>
      </Overlay>
    </>
  );
};
