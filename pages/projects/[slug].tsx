import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link'; 
import styles from './ProjectDetails.module.css'; 

interface ProjectDetailsProps {
  content: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  challenges?: string;
}

function ProjectDetails({ content, title, description, technologies, image, github, challenges }: ProjectDetailsProps) {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className={`container mx-auto py-12 ${styles.container}`}>
        <div className="mb-8">
          <Link href="/projects" className={styles.backLink}>
            Retour aux projets
          </Link>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <img src={image} alt={title} className={styles.image} />
        <p className={styles.description}>{description}</p>

        <div className={styles.techSection}>
          <h3 className={styles.techTitle}>Technologies utilisées:</h3>
          <ul className={styles.techList}>
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        {github && (
          <div>
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
              Voir le code sur GitHub
            </a>
          </div>
        )}

        {challenges && (
          <div className={styles.challengeSection}>
            <h3 className={styles.challengeTitle}>Défis rencontrés:</h3>
            <p className={styles.challengeText}>{challenges}</p>
          </div>
        )}

        <div className={styles.markdownContent}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const projectFiles = fs.readdirSync(path.join(process.cwd(), 'data/projects'));

  const paths = projectFiles
    .map((filename) => filename.replace('.md', ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'data/projects', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    props: {
      content,
      title: data.title || 'No Title',
      description: data.description || 'No Description',
      technologies: data.technologies || [],
      image: data.image || '/images/default.png',
      github: data.github || null,
      challenges: data.challenges || null,
    },
  };
}

export default ProjectDetails;

