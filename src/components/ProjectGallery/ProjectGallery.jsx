// COMPONENTS
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectModal from './ProjectModal/ProjectModal';

// ASSETS
import './ProjectGallery.scss';
import imgProject1_main from '@assets/images/illustrations_projets/projet_1/projet_1_illustration_1.png';
import imgProject1_2 from '@assets/images/illustrations_projets/projet_1/projet_1_illustration_2.png';
import imgProject1_3 from '@assets/images/illustrations_projets/projet_1/projet_1_illustration_3.png';
import imgProject1_4 from '@assets/images/illustrations_projets/projet_1/projet_1_illustration_4.png';
import imgProject1_5 from '@assets/images/illustrations_projets/projet_1/projet_1_illustration_5.png';

import imgProject3_main from '@assets/images/illustrations_projets/projet_3/projet_3_illustration_1.png';

import imgProject5_main from '@assets/images/illustrations_projets/projet_5/projet_5_illustration_1.png';




import { useState } from 'react';

export default function ProjectGallery({}) {

  const categories = {
    1: 'front-end',
    2: 'back-end',
    3: 'optimisation'
  }


  const projects = [
    {
      title: 'Créez la page d’accueil d’une agence de voyage avec HTML & CSS',
      description: 'Ce projet consistait en la création d’une page d’accueil d’une agence de voyage en utilisant HTML et CSS. Avec à disposition une maquette figma pour différentes tailles d’écrans, la mission était d’intégrer l’interface responsive du site.',
      issues: 'Certains éléments à adapter en responsive ne réagissaient pas comme souhaités. Après des recherches personnelles, et avec des discussions avec mon mentor, j’ai pu découvrir des propriétés CSS qui m’étaient inconnues et qui ont pu résoudre mes différents problèmes d’affichage.',
      developped_skills: 'Ce premier projet m’aura permis de découvrir de nombreuses propriétés CSS et, même en étant seul, d’appréhender la logique de travail en équipe via l’ajout réguliers de commit et l’utilisation de différentes branches git lors du processus de développement.',
      background: imgProject1_main,
      galery: [
        imgProject1_2,
        imgProject1_3,
        imgProject1_4,
        imgProject1_5,
      ],
      category: 1,
      github_link: '',
    },
    {
      title: 'Développez le back-end d’un site de notation de livres',
      description: 'Ce projet consistait, après avoir reçu l’intégration du site en React, en la réalisation du back-end, avec la technologie Node.js. Les fonctionnalités attendues étaient de pouvoir se connecter en tant que membre du site, de poster un livre et ses informations et de pouvoir le modifier ou le supprimer ultérieurement. Il fallait également avoir la possibilité de noter n’importe quel livre en ligne et de mettre en jour la note moyenne.',
      issues: 'Une des problématiques majeures rencontrées durant ce projet était le processus d’update des caractéristiques d’un livre. En effet, j’ai rencontré des difficultés à mettre à jour la note moyenne d’un livre après le vote d’un utilisateur : le calcul était correct mais la valeur affichée côté front ne convenait pas. Afficher à l’aide d’un console.log le contenu des variables à chaque étape du processus m’a permis de me rendre compte que des anciens votes étaient écrasés et donc la moyenne renvoyée n’était pas celle attendue.',
      developped_skills: 'Durant ce projet, j’ai appris à mettre en place un serveur et j’ai assimilé la logique d’écoute de requêtes et de construction de routes, en sécurisant certaines d’entre-elles via des middlewares d’authentification. J’ai également appris à structurer et à organiser les dossiers afin de rendre un modèle MVC lisible et maintenable.',
      background: imgProject1_main,
      galery: [
      ],
      category: 2,
      github_link: '',
    },
    {
      title: 'Créez une application web de location immobilière avec React',
      description: 'Ce projet consistait en l’intégration avec la technologie React d’une maquette pour un site de réservations immobilières. Ce projet comportait 3 pages. Tout d’abord, la page d’accueil, avec la liste des vignettes de tous les hébergements. Au clic d’une vignette, la page logement avec les bonnes informations était affichée en fonction de l’id transmis par l’url. Et enfin, la page à propos, qui était composée de menu ouvrant/fermant à la manière d’une FAQ.',
      issues: 'L’installation des dépendances du projet a ralenti le démarrage de celui-ci. En effet, après avoir tout installé et construit quelques composants, je me suis rendu compte que l’application React rencontrait beaucoup d’erreurs au niveau du node_modules sans pouvoir vraiment en discerner l’origine. J’ai donc isolé mes composants à part et ai recommencé une installation depuis le début en effectuant un commit à chaque nouvelle dépendance installée sans erreurs. Progressivement, j’ai pu découvrir que j’avais mal installé le package sass et ai pu résoudre le problème.',
      developped_skills: 'Ce projet m’a permis de mettre en place ma première architecture React. Je sais désormais construire un composant, l’associer à son propre fichier de style, l’inclure dans d’autres composants et gérer l’interaction entre les composants via les props.J’ai aussi appris à conditionner l’affichage en fonction de l’url à l’aide du router et aussi à rediriger n’importe quelle url inattendue vers une page 404.',
      background: imgProject1_main,
      galery: [
      ],
      category: 1,
      github_link: '',
    },
    {
      title: 'Débuggez et optimisez un site de photographe',
      description: 'Ce projet consistait à retravailler un site de photographe pour améliorer sa performance générale via un rapport Lighthouse. Dans un second temps, il fallait aussi débugger la navigation dans la modale de la galerie et le CSS non mis à jour dans la sélection des filtres. Un travail sur les images a été conséquent (compression, taille, format, lazyloading) pour optimiser les performances du site. Pour améliorer pour le SEO, des metas ont été ajouté et les balises HTML remises dans leur contexte.',
      issues: 'Débugger la navigation de la modale en JQuery n’était pas évident car je n’avais jamais codé avec cette technologie. J’ai procédé pas à pas avec les outils de développeur en repérant les noms de fonctions appelées, le contenu des variables à chaque instant et le moment où le bug se déclenchait.',
      developped_skills: 'Cette expérience m’a fait découvrir la notion de performances de site web et l’importance d’optimiser ses contenus pour ne pas gâcher l’expérience utilisateur. J’ai également découvert des outils pour le référencement local et le partage sur les réseaux sociaux.',
      background: imgProject3_main,
      galery: [
      ],
      category: 3,
      github_link: '',
    },
    {
      title: 'Créez une page web dynamique avec JavaScript',
      description: 'Ce projet consistait à utiliser JavaScript en communiquant avec une API afin de créer une page web dynamique pour une architecture d’intérieur. Le back-end était déjà en place et il fallait gérer le site de la page de connexion jusqu’à l’intégration d’une modale permettant d’uploader de nouveaux médias qui s’affichaient dynamiquement dans la galerie.',
      issues: '',
      developped_skills: 'Pour la première fois j’ai déployé une architecture JavaScript modulaire et ai manipulé des classes. J’ai aussi appris à gérer des évènements utilisateurs pour récupérer des informations ou pour mettre à jour le DOM.',
      background: imgProject5_main,
      galery: [
      ],
      category: 1,
      github_link: '',
    },
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
       <h2 className='title-category'>Mes Projets</h2>
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
