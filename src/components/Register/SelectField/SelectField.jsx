import { Label } from '../FileInput/FileInput.styles';
import {
  SelectFieldContainer,
  SelectFieldInput,
  SelectFieldParentContainer,
} from './SelectField.styles';
import { ErrorMessage } from '../InputField/InputField.styles';

function SelectField({
  options = [],
  onChange,
  placeholder,
  value,
  className,
  name,
  label,
  error,
}) {
  return (
    <SelectFieldParentContainer>
      <Label>{label}</Label>
      <SelectFieldContainer className={className} $hasError={error && true}>
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
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SelectFieldParentContainer>
  );
}

export default SelectField;
