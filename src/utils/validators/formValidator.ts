import { required, validateWithRegex } from './inputValidators';
import type { CheckoutFormState } from '../../types/global.types';

const validators = {
  fullName: [
    required('Full Name'),
    validateWithRegex(/^[A-Za-z\s]+$/, 'Full Name should contain only letters'),
  ],
  email: [
    required('Email'),
    validateWithRegex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'),
  ],
  phone: [
    required('Phone'),
    validateWithRegex(/^\d{3}-\d{3}-\d{4}$/, 'Phone must be in xxx-xxx-xxxx format'),
  ],
  address1: [required('Address')],
  address2: [],
  city: [
    required('City'),
    validateWithRegex(/^[A-Za-z\s]+$/, 'City should contain only letters and space'),
  ],
  pinCode: [required('Pincode'), validateWithRegex(/^\d{6}$/, 'Pincode must be exactly 6 digits')],
  cardNumber: [
    required('Credit Card'),
    validateWithRegex(/^\d{19}$/, 'Credit card number must be exactly 19 digits'),
  ],
  cvv: [required('CVV'), validateWithRegex(/^\d{3}$/, 'CVV must be exactly 3 digits')],
  nameOnCard: [],
};

export const validateForm = (form: CheckoutFormState) => {
  const errors: Record<string, string> = {};
  (Object.keys(validators) as Array<keyof CheckoutFormState>).forEach((field) => {
    for (const validate of validators[field]) {
      const error = validate(form[field] ?? '');
      if (error) {
        errors[field] = error;
        break;
      }
    }
  });

  return errors;
};

export const validateField = (field: string, value: string): string | null => {
  const fieldvalidators = validators[field as keyof CheckoutFormState] || [];
  for (const validate of fieldvalidators) {
    const error = validate(value);
    if (error) return error;
  }
  return null;
};
