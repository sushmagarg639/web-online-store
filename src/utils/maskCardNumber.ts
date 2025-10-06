export function maskCardNumber(cardNumber: string | number): string {
  const numberStr = String(cardNumber).replace(/\D/g, '');
  const last4 = numberStr.slice(-4);
  return '**** **** **** ' + last4;
}
