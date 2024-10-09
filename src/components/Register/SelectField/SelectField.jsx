import { SelectFieldContainer, SelectFieldInput } from './SelectField.styles';

function SelectField({ options, onSelect, placeholder, value }) {
  return (
    <SelectFieldContainer>
      <SelectFieldInput onChange={onSelect} value={value}>
        <option disabled>{placeholder}</option>
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
