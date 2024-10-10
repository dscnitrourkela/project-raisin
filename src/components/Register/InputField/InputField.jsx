import { Label } from '../FileInput/FileInput.styles';
import { InputFieldContainer, InputFieldParentContainer, ErrorMessage } from './InputField.styles';

function InputField({ placeholder, type, onChange, value, className, name, label, error }) {
  return (
    <InputFieldParentContainer>
      <Label>{label}</Label>
      <InputFieldContainer
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className={className}
        name={name}
        $hasError={error && true}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputFieldParentContainer>
  );
}

export default InputField;
