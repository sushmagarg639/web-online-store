import React from 'react';
import type { FormInputProps } from './InputField.types';

function InputField({
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

export default React.memo(InputField);
