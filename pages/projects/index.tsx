import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './index.module.css'; 

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
}

function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className={`container mx-auto py-12 ${styles.container}`}>
        {/* classe locale styles.title */}
        <h2 className={styles.title}>Mes projets</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.slug} className={styles.projectCard}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link href={`/projects/${project.slug}`} className={styles.projectButton}>
                  Voir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const projectFiles: string[] = await glob('data/projects/**/*.md');

  const projects = projectFiles.map((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent) as { data: { [key: string]: any } };
    const slug = path.basename(filePath, '.md');
    return {
      slug,
      ...data,
    };
  }) as Project[];

  return {
    props: {
      projects,
    },
  };
}

export default Projects;

