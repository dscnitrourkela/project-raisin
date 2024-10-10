import { SelectFieldContainer, SelectFieldInput } from './SelectField.styles';

function SelectField({ options = [], onChange, placeholder, value, className, name }) {
  return (
    <SelectFieldContainer className={className}>
      <SelectFieldInput onChange={onChange} value={value} name={name}>
        <option disabled value=''>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectFieldInput>
    </SelectFieldContainer>
  );
}

export default SelectField;
