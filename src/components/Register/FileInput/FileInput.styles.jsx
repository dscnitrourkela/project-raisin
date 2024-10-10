import styled from 'styled-components';
import tw from 'twin.macro';
import { InputFieldContainer } from '../InputField/InputField.styles';

const FileUploadContainer = styled.div`
  ${tw`flex flex-col gap-5 w-full md:w-[35rem]`}
`;

const Label = styled.span`
  ${tw`font-prompt text-lg`}
`;

const StyledFileInput = styled(InputFieldContainer)`
  ${tw`w-full`}
`;

export { FileUploadContainer, Label, StyledFileInput };
