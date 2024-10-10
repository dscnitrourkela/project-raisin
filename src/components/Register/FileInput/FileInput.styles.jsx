import styled from 'styled-components';
import tw from 'twin.macro';
import { InputFieldContainer } from '../InputField/InputField.styles';

const FileUploadContainer = styled.div`
  ${tw`flex flex-col gap-5`}
`;

const Label = styled.label`
  ${tw`font-prompt text-lg`}
`;

const StyledFileInput = styled(InputFieldContainer)`
  ${tw`md:w-96 w-auto`}
`;

export { FileUploadContainer, Label, StyledFileInput };
