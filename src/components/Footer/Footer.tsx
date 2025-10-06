import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <img src="logos/online-store-inverse.svg" alt="online store logo" />
        <p>&copy; 2025 HeartStore. Made with ❤️ for shoppers.</p>
      </div>
    </footer>
  );
}
