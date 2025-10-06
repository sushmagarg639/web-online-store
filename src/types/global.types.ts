export interface StoreItemProps {
  id: string;
  name: string;
  description: string;
  suggestedPrice: string;
  actualPrice: string;
  image: string;
}

export type StorePurchaseContextType = {
  page: string;
  onBuy: (item: StoreItemProps) => void;
  onSubmit: (details: OrderDetailsProps) => void;
  selectedItem: StoreItemProps | null;
  setSelectedItem: (item: StoreItemProps | null) => void;
  orderDetails: OrderDetailsProps | null;
  setOrderDetails: (details: OrderDetailsProps | null) => void;
};

export interface CheckoutFormState {
  fullName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  pinCode: string;
  cardNumber: string;
  nameOnCard?: string;
  cvv: string;
}

export interface OrderDetailsProps extends CheckoutFormState {
  address: string;
  orderNumber: string;
}
