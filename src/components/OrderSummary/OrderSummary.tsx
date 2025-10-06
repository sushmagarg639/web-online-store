import type { StoreItemProps } from '../../types/global.types';
import styles from './OrderSummary.module.scss';
import { formattedName } from '../../utils/formattedName';

export default function OrderSummary({
  selectedItem,
  page,
}: {
  selectedItem: StoreItemProps | null;
  page: string;
}) {
  if (!selectedItem) return;
  return (
    <div className={`${styles.ordersummary} ${styles[page]} `}>
      <h2>Your Order Summary</h2>
      <div className={styles['ordersummary__content']}>
        <img src={selectedItem.image} alt={selectedItem.name} />
        <div className={styles['ordersummary__about']}>
          <h3>{formattedName(selectedItem.name)}</h3>
          <p>{selectedItem.description}</p>
        </div>
      </div>
      <p className={styles['ordersummary__total']}>Total: ${selectedItem.actualPrice}</p>
    </div>
  );
}
