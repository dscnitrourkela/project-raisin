import {
  beamImage,
  campusAbassadorPara,
  campusAmbassadorInput,
} from '@/config/content/Registration/details';

import CheckBox from '../InputCheckBox/CheckBox';
import {
  BeamImage,
  CheckBoxWrapper,
  Container,
  Description,
  Title,
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
          <span className='text-sm mt-2'>Use this while referring to your peers.</span>
        </Description>
      )}
    </Container>
  );
}

export default CampusAmbassador;
