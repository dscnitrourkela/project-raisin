import styled from 'styled-components';
import tw from 'twin.macro';

const FileUploadContainer = styled.div`
  ${tw`flex flex-col gap-5 w-full md:w-[35rem]`}
`;

const Label = styled.span`
  ${tw`font-prompt text-lg`}
`;

const UploadButton = styled.button`
  ${tw`flex items-center gap-10 cursor-pointer`}
`;

const FileLabel = styled.label`
  ${tw`font-prompt text-base font-[400]`}
  ${({ $hasError }) => $hasError && tw`text-red-500`}
`;

export { FileUploadContainer, Label, UploadButton, FileLabel };
