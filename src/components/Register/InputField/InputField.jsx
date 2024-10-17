import { Label } from '../FileInput/FileInput.styles';
import { InputFieldContainer, InputFieldParentContainer, ErrorMessage } from './InputField.styles';
import { userSchema } from '@/config/zodd/userDetailsSchema';
function InputField({
  placeholder,
  type,
  onChange,
  value,
  className,
  name,
  label,
  error,
  setErrors,
}) {
  function handleBlur() {
    const validationResult = userSchema.safeParse({ [name]: value });
    if (!validationResult.success) {
      const fieldError = validationResult.error.errors.find((err) => err.path[0] === name);
      if (fieldError) {
        setErrors((prev) => ({ ...prev, [name]: fieldError.message }));
      }
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

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
        onBlur={handleBlur}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputFieldParentContainer>
  );
}

export default InputField;
