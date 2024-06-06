// HOOKS
import { useState, useEffect } from 'react';

// ASSETS
import './MyTechs.scss';

// Import des logos (assure-toi de mettre le chemin correct vers tes images)
import HTMLLogo from '@assets/images/mytechs/html.webp';
import CSSLogo from '@assets/images/mytechs/css.webp';
import JSLogo from '@assets/images/mytechs/js.webp';
import ReactLogo from '@assets/images/mytechs/react.webp';
import NodejsLogo from '@assets/images/mytechs/nodejs.webp';
import PHPLogo from '@assets/images/mytechs/php.webp';
import MySQLLogo from '@assets/images/mytechs/mysql.webp';
import TailwindLogo from '@assets/images/mytechs/tailwind.webp';
import SASSLogo from '@assets/images/mytechs/sass.webp';
import GITLogo from '@assets/images/mytechs/git.webp';
import GITHUBLogo from '@assets/images/mytechs/github.webp';
import VSCODELogo from '@assets/images/mytechs/vscode.webp';
import POSTMANLogo from '@assets/images/mytechs/postman.webp';

export default function MyTechs() {
  const techs = [
    { id: 'tech-0', logo: HTMLLogo, alt: 'HTML' },
    { id: 'tech-1', logo: CSSLogo, alt: 'CSS' },
    { id: 'tech-2', logo: JSLogo, alt: 'JavaScript' },
    { id: 'tech-3', logo: ReactLogo, alt: 'React' },
    { id: 'tech-4', logo: NodejsLogo, alt: 'Node.js' },
    { id: 'tech-5', logo: PHPLogo, alt: 'PHP' },
    { id: 'tech-6', logo: MySQLLogo, alt: 'MySQL' },
    { id: 'tech-7', logo: TailwindLogo, alt: 'Tailwind CSS' },
    { id: 'tech-8', logo: SASSLogo, alt: 'SASS' },
    { id: 'tech-9', logo: GITLogo, alt: 'GIT' },
    { id: 'tech-10', logo: GITHUBLogo, alt: 'GitHub' },
    { id: 'tech-11', logo: VSCODELogo, alt: 'Visual Studio Code' },
    { id: 'tech-12', logo: POSTMANLogo, alt: 'Postman' },
  ];

  const [isAnimated, setIsAnimated] = useState(false);
  const scrollers = document.querySelectorAll(".scroller");

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
      setIsAnimated(true);
    }
  })

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
    });
  }

  return (
    <section id="mytechs" className="mytechs scroller">
      <h2 className='title-category'>Technologies et outils familiers</h2>
      <ul className="scroller__inner">
        {techs.map((tech) => (
          <li key={tech.id} className="slide">
            <img src={tech.logo} alt={tech.alt} />
          </li>
        ))}
        {/* Si l'animation se lance, dupliquer les logos */}
        {isAnimated && techs.map((tech) => (
          <li key={`${tech.id}-duplicate`} className="slide">
            <img src={tech.logo} alt={tech.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
