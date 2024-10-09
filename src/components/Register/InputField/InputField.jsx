import { InputFieldContainer } from './InputField.styles';

function InputField({ placeholder, type, onChange, value }) {
  return (
    <InputFieldContainer value={value} placeholder={placeholder} type={type} onChange={onChange} />
  );
}

export default InputField;
