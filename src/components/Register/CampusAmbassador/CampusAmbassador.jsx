import CheckBox from '../InputCheckBox/CheckBox';
import { beamImage, campusAmbassadorInput } from '@/config/content/Registration/details';
import {
  Container,
  BeamImage,
  Title,
  Description,
  CheckBoxWrapper,
} from './campusAmbassador.styles';
function CampusAmbassador({ handleChange }) {
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
    </Container>
  );
}

export default CampusAmbassador;
