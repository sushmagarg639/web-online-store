import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <a href="/">
          <img src="logos/online-store.svg" alt="online store logo" />
        </a>
        {/* <nav>
          <a href="/checkout" className={styles['shopping-cart']}>
            <img src="logos/shopping-cart.svg" alt="shopping cart" />
            <span className={styles['shopping-cart__count']}>99</span>
          </a>
        </nav> */}
      </div>
    </header>
  );
}
