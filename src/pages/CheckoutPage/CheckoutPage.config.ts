export const checkoutFormFields = [
  {
    legend: 'Your Info',
    fields: [
      {
        name: 'fullName',
        type: 'text',
        label: 'Full Name',
        placeholder: 'e.g. John Doe',
        required: true,
      },
      {
        name: 'email',
        type: 'email',
        label: 'E-mail Address',
        placeholder: 'e.g. example@domain.com',
        required: true,
      },
      {
        name: 'phone',
        type: 'tel',
        label: 'Phone Number',
        placeholder: 'e.g. 123-123-1234',
        required: true,
      },
    ],
  },
  {
    legend: 'Billing Address',
    fields: [
      {
        name: 'address1',
        type: 'text',
        label: 'Address Line 1',
        placeholder: 'e.g. 123 Main St',
        required: true,
      },
      {
        name: 'address2',
        type: 'text',
        label: 'Address Line 2 (optional)',
        placeholder: 'e.g. near Ryan school',
        required: false,
      },
      {
        name: 'city',
        type: 'text',
        label: 'City',
        placeholder: 'e.g. New York',
        required: true,
      },
      {
        name: 'pinCode',
        type: 'number',
        label: 'Pincode',
        placeholder: 'e.g. 560037',
        required: true,
      },
    ],
  },
  {
    legend: 'Payment Details',
    fields: [
      {
        name: 'cardNumber',
        type: 'number',
        label: 'Credit Card Number',
        placeholder: '19 digits',
        required: true,
      },
      {
        name: 'cvv',
        type: 'number',
        label: 'CVV',
        placeholder: 'e.g. 123',
        required: true,
      },
      {
        name: 'nameOnCard',
        type: 'text',
        label: 'Name on the Card (optional)',
        placeholder: 'e.g. John Doe',
        required: false,
      },
    ],
  },
];