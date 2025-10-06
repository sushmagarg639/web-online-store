export type CheckoutFormAction =
  | { type: 'UPDATE'; field: string; value: string }
  | { type: 'RESET' };
