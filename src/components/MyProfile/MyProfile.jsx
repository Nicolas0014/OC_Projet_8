import './MyProfile.scss';
import { ReactTyped } from "react-typed";

import background from '../../assets/portfolio/background-2.png';
import profile from '../../assets/portfolio/img-dev.png';

export default function MyProfile({}) {

  return (
    <section className="intro" style={{ backgroundImage: `url(${background})` }}>
        <div className="intro-content">
            <div className="intro-text">
            <h1>Bonjour, je suis <span className="highlight">Nicolas Charbonnier</span></h1>
            <p>Je suis un développeur spécialisé en <span className="highlight">Full Stack</span> </p>
            <ReactTyped
                strings={[
                'React.js',
                'Node.js',
                'Gestion de projet',
                'Développement web',
                'JavaScript',
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className='typed-style'
            />
            </div>
            <div className="intro-photo">
                <img src={profile} alt="Votre Nom" />
            </div>
        </div>
    </section>
  );
}
