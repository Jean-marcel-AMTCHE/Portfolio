import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './About.module.css'; 
import Image from 'next/image';

function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>Salut ! Je suis Jean-Marcel, ravi de vous rencontrer !</h1>
            <p>
            Je suis un développeur web passionné 💻, spécialisé dans la création de solutions digitales performantes et évolutives 🚀. Ma formation et mon expérience m'ont permis de maîtriser un large éventail de technologies telles que React, Html, CSS, JavaScript, Sql, MongoDb, Node.js, et Next js, que j'utilise pour transformer des idées en applications concrètes et utiles ✨.
            </p>
            <p>
            J'ai eu l'opportunité de travailler sur de nombreux projets variés au sein d'une agence web 🏢, ce qui m'a permis de développer une approche créative 🎨 et pragmatique du développement. Je suis toujours prêt à relever de nouveaux défis 💪, à apprendre de nouvelles technologies 📚, et à collaborer avec des équipes dynamiques 🤝 pour créer des expériences utilisateurs intuitives.
            </p>
            <p>
            Mon approche du développement est centrée sur la compréhension des besoins des utilisateurs 👥 et la création de solutions robustes et élégantes 🛠️. Je suis convaincu que la collaboration, l'écoute 👂, et l'adaptabilité 🌱 sont des valeurs clés pour réussir dans ce domaine.
            </p>
            <p>
            Toujours en quête de projets ambitieux, je souhaite mettre mes compétences, ma passion ❤️ et mon envie d'apprendre 📈 au service d'une équipe pour contribuer à sa réussite 🤗.
            </p>
            <a href="/cv/Jean-Marcel_Amoutche_CV.pdf" download className={styles.downloadLink}>
              Télécharger mon CV
            </a>
          </div>
          <div className={styles.imageSection}>
            <Image
              src="/images/profile.jpg" 
              alt="Ma photo de profil"
              width={300} 
              height={400} 
              className={styles.profileImage}
            />
            <div className={styles.socialLinks}>
  <a href="https://scholar.google.com/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
    <i className="fas fa-envelope"></i> Me suivre sur Google Scholar
  </a>
  <a href="https://github.com/Jean-marcel-AMTCHE" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i> Me suivre sur GitHub
  </a>
  <a href="https://www.linkedin.com/feed/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i> Me suivre sur LinkedIn
  </a>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;


