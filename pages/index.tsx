import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Home.module.css';
import Link from 'next/link';

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Jean-Marcel Amoutche</h1>
        <p className={styles.description}>Développeur Web passionné par la création de solutions innovantes et performantes.</p>
        <div className={styles.buttons}>
          <Link href="/projects" className={styles.button}>
            Voir mes projets
          </Link>
          <Link href="/contact" className={styles.button}>
            Me contacter
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;



