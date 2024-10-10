import { StyledFileInput, FileUploadContainer, Label } from './FileInput.styles';
import { ErrorMessage } from '../InputField/InputField.styles';
export default function FileInput({
  label = 'Upload File',
  placeholder = 'Choose a file',
  handleChange,
  name,
  className,
  error,
}) {
  return (
    <FileUploadContainer className={className}>
      <Label>{label}</Label>
      <StyledFileInput
        type='file'
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        $hasError={error && true}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FileUploadContainer>
  );
}
