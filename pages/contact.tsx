import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Contact.module.css';
import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation simple côté client
    if (!name || !email || !message) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Envoi des données via une API Route Next.js
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert('Message envoyé avec succès !');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Une erreur s\'est produite lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error('Erreur :', error);
      alert('Une erreur s\'est produite lors de l\'envoi du message.');
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>Contactez-moi</h2>

        <div className={styles.contactInfo}>
          <p>Vous pouvez me contacter à l'adresse suivante :</p>
          <p>
            <strong>Email :</strong> <a href="mailto:jeanmarcelamoutche774@gmail.com">jeanmarcelamoutche774@gmail.com</a>
          </p>
          <p>Ou utilisez le formulaire ci-dessous :</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;


