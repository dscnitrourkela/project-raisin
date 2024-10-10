import { StyledFileInput, FileUploadContainer, Label } from './FileInput.styles';
export default function FileInput({
  label = 'Upload File',
  placeholder = 'Choose a file',
  handleChange,
  name,
  className,
}) {
  return (
    <FileUploadContainer className={className}>
      <Label>{label}</Label>
      <StyledFileInput type='file' placeholder={placeholder} onChange={handleChange} name={name} />
    </FileUploadContainer>
  );
}
