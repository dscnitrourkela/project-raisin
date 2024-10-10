import { Label } from '../FileInput/FileInput.styles';
import {
  SelectFieldContainer,
  SelectFieldInput,
  SelectFieldParentContainer,
} from './SelectField.styles';

function SelectField({ options = [], onChange, placeholder, value, className, name, label }) {
  return (
    <SelectFieldParentContainer>
      <Label>{label}</Label>
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
    </SelectFieldParentContainer>
  );
}

export default SelectField;
