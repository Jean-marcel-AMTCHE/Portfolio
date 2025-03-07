import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob'; // Nouvelle façon d'importer glob
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
      <main className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold mb-6">Mes projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <Link href={`/projects/${project.slug}`} className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
  const projectFiles: string[] = await glob('data/projects/**/*.md'); // Utilisation de glob en mode asynchrone

  const projects = projectFiles.map((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent) as { data: { [key: string]: any } }; // Ajout de l'assertion de type
    const slug = path.basename(filePath, '.md');
    return {
      slug,
      ...data,
    };
  }) as Project[]; // Ajout de l'assertion de type

  return {
    props: {
      projects,
    },
  };
}

export default Projects;
