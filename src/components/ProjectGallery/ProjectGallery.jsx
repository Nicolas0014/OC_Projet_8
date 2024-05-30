import './ProjectGallery.scss';
import { useState } from 'react';

import ProjectCard from './ProjectCard/ProjectCard';
import ProjectModal from './ProjectModal/ProjectModal';

export default function ProjectGallery({}) {

    const projects = [
        {
          title: 'Site Back-end',
          description: 'Description du projet 1',
          image: 'project1.jpg',
          category: 'Back-end',
        },
        {
          title: 'Intégration en React',
          description: 'Description du projet 2',
          image: 'project2.jpg',
          category: 'Front-end',
        },
        // Ajoutez d'autres projets ici
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

  return (
    <section className="project-gallery">
       <h2>Mes Projets</h2>
        <div className="filter-buttons">
            {/* Ajoutez des boutons de filtre ici */}
        </div>
        <div className="project-cards">
            {projects.map((project) => (
            <ProjectCard
                key={project.title}
                project={project}
                openModal={openModal}
            />
            ))}
        </div>
        {selectedProject && (
            <ProjectModal project={selectedProject} closeModal={closeModal} />
        )}
    </section>
  );
}
