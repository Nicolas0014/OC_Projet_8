import './ProjectModal.scss';
import Modal from 'react-modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faXmark, faLink, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function ProjectModal({ project, closeModal }) {

  const [activeSection, setActiveSection] = useState('issues');

  const handleIconClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  return (
    <section>
       <Modal
        isOpen={!!project}
        onRequestClose={closeModal}
        contentLabel="Project Modal"
        className="project-modal"
      >
        <FontAwesomeIcon className='close-button' icon={faXmark} onClick={closeModal} />
        <h2>{project.title}</h2>
        <div className="project-modal-content">
          <div className="project-description">
            <p>{project.description}</p>
          </div>
          <div className='project-details-block'>
            <div className="project-icons">
              <FontAwesomeIcon className='icon-1' icon={faExclamation} onClick={() => handleIconClick('issues')}/>
              <FontAwesomeIcon className='icon-2' icon={faLink} onClick={() => handleIconClick('github')}/>
              <FontAwesomeIcon className='icon-3' icon={faGraduationCap} onClick={() => handleIconClick('skills')}/>
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
                <p>{project.skills}</p>
              </div>
            )}
            {activeSection === 'github' && (
              <div className="project-details">
                <h3>Liens vers le repo Github</h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Voir sur Github
                </a>
              </div>
            )}
            </div>
        </div>
      </Modal>
    </section>
  );
}
