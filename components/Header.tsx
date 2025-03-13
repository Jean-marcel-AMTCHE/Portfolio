import Link from 'next/link';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`${styles.header} ${darkMode ? styles.headerDark : ''}`}>
      <div className={styles.profile}>
        <img src="/images/profile.jpg" alt="Votre Photo" className={styles.profileImage} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/" className={styles.navLink}>Accueil</Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>À propos</Link>
          </li>
          <li>
            <Link href="/projects" className={styles.navLink}>Projets</Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


