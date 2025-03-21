import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css'; 

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className={styles.projectCard} 
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.2 }}
    >
      <img src={project.image} alt={project.title} className={styles.projectImage} />
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <Link href={`/projects/${project.slug}`} className={styles.projectLink}>
          Voir plus
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;


