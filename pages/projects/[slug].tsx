import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ProjectDetails() {
  const router = useRouter();
  const { slug } = router.query;

  // TODO: Récupérer les détails du projet en fonction du slug
  const project = {
    slug: slug,
    title: `Projet ${slug}`,
    description: 'Description détaillée du projet',
    technologies: ['React', 'Next.js'],
  };

  return (
    <div>
      <Header />
      <main>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>Technologies utilisées: {project.technologies.join(', ')}</p>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectDetails;

