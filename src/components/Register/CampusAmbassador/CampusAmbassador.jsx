import CheckBox from '../InputCheckBox/CheckBox';
import {
  beamImage,
  campusAmbassadorInput,
  campusAbassadorPara,
} from '@/config/content/Registration/details';
import {
  Container,
  BeamImage,
  Title,
  Description,
  CheckBoxWrapper,
} from './CampusAmbassador.styles';
function CampusAmbassador({ handleChange, userReferral, isCampusAmbassador }) {
  function isUserRefferalCorrect(referralCode) {
    return referralCode.length === 10 && /^\d+$/.test(String(referralCode));
  }

  return (
    <Container>
      <BeamImage src={beamImage} alt='Campus Ambassador' height={500} width={500} />
      <Title>Campus Ambassador</Title>
      <Description>{campusAbassadorPara}</Description>
      <CheckBoxWrapper>
        <CheckBox
          name={campusAmbassadorInput.id}
          onChange={handleChange}
          label={campusAmbassadorInput.label}
          css={campusAmbassadorInput?.className}
        />
      </CheckBoxWrapper>

      {isCampusAmbassador && isUserRefferalCorrect(userReferral) && (
        <Description
          style={{
            marginTop: '3rem',
          }}
        >
          Your referral code is <strong>{userReferral}</strong>
          <br />
          <code className='text-lg'>Use this while referring to your peers.</code>
        </Description>
      )}
    </Container>
  );
}

export default CampusAmbassador;
