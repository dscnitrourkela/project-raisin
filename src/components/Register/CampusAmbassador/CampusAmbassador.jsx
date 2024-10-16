import CheckBox from '../InputCheckBox/CheckBox';
import { beamImage, campusAmbassadorInput } from '@/config/content/Registration/details';
import {
  Container,
  BeamImage,
  Title,
  Description,
  CheckBoxWrapper,
} from './CampusAmbassador.styles';
function CampusAmbassador({ handleChange, userReferral }) {
  function isUserRefferalCorrect(referralCode) {
    return referralCode.length === 10 && /^\d+$/.test(String(referralCode));
  }

  return (
    <Container>
      <BeamImage src={beamImage} alt='Campus Ambassador' height={500} width={500} />
      <Title>Campus Ambassador</Title>
      <Description>
        Become a Campus Ambassador and unlock exclusive perks, leadership opportunities, and
        unforgettable experiences!
      </Description>
      <CheckBoxWrapper>
        <CheckBox
          name={campusAmbassadorInput.id}
          onChange={handleChange}
          label={campusAmbassadorInput.label}
          css={campusAmbassadorInput?.className}
        />
      </CheckBoxWrapper>

      {isUserRefferalCorrect(userReferral) && (
        <Description
          style={{
            marginTop: '3rem',
          }}
        >
          Your referral code is <strong>{userReferral}</strong>
        </Description>
      )}
    </Container>
  );
}

export default CampusAmbassador;
