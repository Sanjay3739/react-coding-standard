import React from 'react';
import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderOverlay}>
        <div className={styles.loaderSpinner}></div>
      </div>
      <p className={styles.loaderText}>Please wait while we process your request...</p>
    </div>
  );
};

export default Loader;
