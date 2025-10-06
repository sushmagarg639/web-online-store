import styles from './LoadingFallback.module.scss';

export default function LoadingFallback() {
  return (
    <div className={styles['spinner-container']} role="status" aria-label="Loading">
      <div className={styles.spinner}></div>
    </div>
  );
}
