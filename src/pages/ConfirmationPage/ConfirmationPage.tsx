import OrderSummary from '../../components/OrderSummary';
import { maskCardNumber } from '../../utils/maskCardNumber';
import { useCustomContext } from '../../hooks/useCustomContext';
import { StorePurchaseContext } from '../../context/StorePurchaseContext';
import styles from './ConfirmationPage.module.scss';

export default function ConfirmationPage() {
  const { orderDetails, selectedItem, page } = useCustomContext(
    StorePurchaseContext,
    'StorePurchaseContext',
  );

  if (!orderDetails || !selectedItem) return;
  return (
    <div className={`container ${styles.wrapper}`}>
      <h1>Order Confirmation</h1>
      <h3>Congratulations! Your order has been placed successfully.</h3>
      <p>Kindly refer below your order details:</p>
      <div className={styles.order}>
        <p className={styles['order__number']}>Order number: {orderDetails.orderNumber}</p>
        <p>
          <strong>Payment Mode:</strong> via Card ending in{' '}
          {maskCardNumber(orderDetails.cardNumber)}
        </p>
        <p>
          <strong>Address:</strong> {orderDetails.address}
        </p>
        <OrderSummary selectedItem={selectedItem} page={page} />
      </div>
    </div>
  );
}
