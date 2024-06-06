// HOOKS
import { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// ASSETS
import './ProjectModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faXmark, faLink, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root'); 

export default function ProjectModal({ project, closeModal }) {

  if (!project) return null;

  const [activeSection, setActiveSection] = useState('issues');

  const handleIconClick = (section) => {
    setActiveSection(section);
  };

  const icons = [
    { section: 'issues', icon: faExclamation, label: 'Problématiques' },
    { section: 'skills', icon: faGraduationCap, label: 'Compétences' },
    { section: 'links', icon: faLink, label: 'Liens' },
  ];

  return (
    <Modal
      isOpen={!!project}
      onRequestClose={closeModal}
      contentLabel="Project Modal"
      className="project-modal"
      overlayClassName="project-modal-overlay"
    >
    <FontAwesomeIcon className='close-button' icon={faXmark} onClick={closeModal} />
    <h2 className='title-category'>{project.title}</h2>
    <div className="project-modal-full-content">
      <div className="project-modal-summary">
        <div className="project-description">
          <p>{project.description}</p>
        </div>
        <div className='project-details-block'>
          <div className="project-icons">
            {icons.map(({ section, icon, label }) => (
              <div
                key={section}
                className={`project-icon ${activeSection === section ? 'active' : ''}`}
                onClick={() => handleIconClick(section)}
              >
              <FontAwesomeIcon className='icon' icon={icon} onClick={() => handleIconClick(section)}/>
              <span className="description">{label}</span>
              </div>
            ))}
          </div>
          {activeSection === 'issues' && (
            <div className="project-details">
              <h3>Problématiques rencontrées et résolution</h3>
              <p>{project.issues}</p>
            </div>
          )}
          {activeSection === 'skills' && (
            <div className="project-details">
              <h3>Compétences développées</h3>
              <p>{project.developped_skills}</p>
            </div>
          )}
          {activeSection === 'links' && (
            <div className="project-details">
              <h3>Liens vers le repo Github</h3>
              <Link href={project.github_link} target="_blank" rel="noopener noreferrer">
                Voir sur Github
              </Link>
            </div>
          )}
          </div>
      </div>
      {/* <div className="project-modal-galery">
        <img src={project.background} alt="illustration" />
      </div> */}
    </div>
  </Modal>
  );
}
