import styles from './loading.module.css';
import Logo from 'public/icons/logo.svg';

export default function Loading() {

  return (
    <div className={styles.container} >
      <Logo className={styles.logo} />
    </div>
  );
}
