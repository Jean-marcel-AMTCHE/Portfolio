import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configuration de Nodemailer 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.user, 
        pass: process.env.pass, 
      },
    });
    try {
      // Options de l'email
      const mailOptions = {
        from: email, 
        to: 'willynzi6@gmail.com', 
        subject: `Nouveau message de ${name}`,
        text: message,
      };

      // Envoi de l'email
      await transporter.sendMail(mailOptions);

      console.log('Email envoyé avec succès !');
      res.status(200).json({ message: 'Message envoyé avec succès !' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email :', error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi du message.' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}



