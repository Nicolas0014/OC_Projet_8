import './ProjectCard.scss';

export default function ProjectCard({ project, openModal }) {

  return (
    <section className="project-card" onClick={() => openModal(project)}>
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
    </section>
  );
}
