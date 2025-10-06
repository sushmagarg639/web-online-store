import React from 'react';
import type { StoreItemProps } from '../../types/global.types';
import { StorePurchaseContext } from '../../context/StorePurchaseContext';
import { useCustomContext } from '../../hooks/useCustomContext';
import styles from './StoreItem.module.scss';
import { formattedName } from '../../utils/formattedName';

export default function StoreItem({ item }: { item: StoreItemProps }) {
  const discountPercentage = () => {
    const suggestedPrice = parseFloat(item.suggestedPrice);
    const actualPrice = parseFloat(item.actualPrice);
    const discount = ((suggestedPrice - actualPrice) / suggestedPrice) * 100;
    return discount.toFixed(2);
  };

  const { onBuy } = useCustomContext(StorePurchaseContext, 'StorePurchaseContext');

  return (
    <div className={styles.card}>
      <div className={styles['card__image']}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles['card__content']}>
        <h2>{formattedName(item.name)}</h2>
        <p>{item.description}</p>
        <div className={styles.price}>
          <span className={styles['price__actual']}>${item.actualPrice}</span>
          <s>${item.suggestedPrice}</s>
          <span className={styles['price__discount']}>{discountPercentage()}% off</span>
        </div>
        <div>
          <button onClick={() => onBuy(item)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
