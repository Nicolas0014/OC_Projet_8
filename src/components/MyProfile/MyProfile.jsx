import './MyProfile.scss';
import { ReactTyped } from "react-typed";

import background from '../../assets/images/others/background-1.webp';
import profile from '../../assets/images/others/MyPicture.webp';

export default function MyProfile({}) {

  return (
    <section id="myprofile" className="intro" style={{ backgroundImage: `url(${background})` }}>
        <div className="intro-content">
          <div className="intro-text">
            <h1 className='main-title'>Bonjour, je suis <span className="highlight">Nicolas Charbonnier</span></h1>
            <p>Après avoir suivi des études d'ingénieur BTP, je me suis reconverti à l'informatique et ai effectué une formation de développeur web. Je m’intéresse à la fois au <span className="highlight">front-end</span> et au <span className="highlight">back-end</span>. <br/><br/> Cette première année en alternance m'a permis de me familiariser avec différents langages et j'ambitionne d'enrichir mes compétences en back-end en commençant une nouvelle formation axée sur PHP - Symfony.</p>
          </div>
          <div className="intro-photo">
              <img src={profile} alt="Votre Nom" />
              <ReactTyped
                strings={[
                  "Autonome",
                  "Appliqué",
                  "Curieux",
                  "Bonne capacité d'apprentissage",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className='typed-style'
              />
          </div>
        </div>
    </section>
  );
}
