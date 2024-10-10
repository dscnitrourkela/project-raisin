import { StyledFileInput, FileUploadContainer, Label } from './FileInput.styles';
export default function FileInput({
  label = 'Upload File',
  placeholder = 'Choose a file',
  onChange,
  id,
  className,
}) {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.files, event);
    }
  };

  return (
    <FileUploadContainer className={className}>
      <Label>{label}</Label>
      <StyledFileInput type='file' placeholder={placeholder} onChange={handleChange} />
    </FileUploadContainer>
  );
}
