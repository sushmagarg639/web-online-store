import type { FormInputProps } from './InputField.types';

export default function InputField({
  id,
  label,
  name,
  type = 'text',
  placeholder = '',
  required = false,
  error,
  ...rest
}: FormInputProps) {
  const inputId = id || name;
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...rest}
      />
      {error && (
        <div id={`${inputId}-error`} role="alert" className="error">
          {error}
        </div>
      )}
    </>
  );
}
