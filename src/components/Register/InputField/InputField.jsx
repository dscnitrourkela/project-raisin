import { InputFieldContainer } from './InputField.styles';

function InputField({ placeholder, type, onChange, value, className, name }) {
  return (
    <InputFieldContainer
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className={className}
      name={name}
    />
  );
}

export default InputField;
