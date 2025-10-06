import type { CheckoutFormState } from '../../types/global.types';
import type { CheckoutFormAction } from './CheckoutPage.types';

export const initialState: CheckoutFormState = {
  fullName: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: '',
  pinCode: '',
  cardNumber: '',
  nameOnCard: '',
  cvv: '',
};

export const formReducer = (state: CheckoutFormState, action: CheckoutFormAction) => {
  switch (action.type) {
    case 'UPDATE': {
      return { ...state, [action.field]: action.value };
    }
    case 'RESET': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
