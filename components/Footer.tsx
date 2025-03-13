import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Jean-Marcel Amoutche</p>
    </footer>
  );
}

export default Footer;


