import Link from 'next/link';
import styles from './Header.module.css'; // Importez le fichier CSS Module

function Header() {
  return (
    <header className={styles.header}> {/* Utilisez les classes CSS */}
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/projects">Projets</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

