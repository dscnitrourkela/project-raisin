import { Label } from '../FileInput/FileInput.styles';
import { InputFieldContainer, InputFieldParentContainer } from './InputField.styles';

function InputField({ placeholder, type, onChange, value, className, name, label }) {
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
      />
    </InputFieldParentContainer>
  );
}

export default InputField;
