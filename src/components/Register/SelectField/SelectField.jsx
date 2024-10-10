import { SelectFieldContainer, SelectFieldInput } from './SelectField.styles';

function SelectField({ options = [], onSelect, placeholder, value, className }) {
  return (
    <SelectFieldContainer className={className}>
      <SelectFieldInput onChange={(e) => onSelect(e.target.value)} value={value}>
        <option disabled value={placeholder}>
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
