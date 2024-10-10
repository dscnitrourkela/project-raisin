import { InputFieldContainer } from './InputField.styles';

function InputField({ placeholder, type, onChange, value, className }) {
  return (
    <InputFieldContainer
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className={className}
    />
  );
}

export default InputField;
