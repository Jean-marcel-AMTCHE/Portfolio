import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Jean-Marcel Amoutche</h1>
        <p>Développeur Web passionné</p>
        <a href="/projects">Voir mes projets</a>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

