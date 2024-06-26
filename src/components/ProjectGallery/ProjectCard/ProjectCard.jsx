import './ProjectCard.scss';

export default function ProjectCard({ project, openModal }) {

  const cardBackground = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${project.background})`;
  // const cardBackground = `linear-gradient(rgba(255, 188, 0, 0.3), rgba(255, 188, 0, 0.3)), url(${project.background})`;

  return (
    <section className="project-card" style={{ backgroundImage: cardBackground }} onClick={() => openModal(project)}>
        <h3 className='title-category'>{project.title}</h3>
    </section>
  );
}
