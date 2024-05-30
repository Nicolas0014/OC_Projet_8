import './MyProfile.scss';
import { ReactTyped } from "react-typed";

import background from '../../assets/images/background-2.png';
import profile from '../../assets/images/img-dev.png';

export default function MyProfile({}) {

  return (
    <section className="intro" style={{ backgroundImage: `url(${background})` }}>
        <div className="intro-content">
          <div className="intro-text">
            <h1 className='main-title'>Bonjour, je suis <span className="highlight">Nicolas Charbonnier</span></h1>
            <p>Suite à une formation de développeur web, je m’intéresse à la fois au <span className="highlight">front-end</span> et au <span className="highlight">back-end</span> avec des expériences en {' '}
              <ReactTyped
                strings={[
                  'HTML',
                  'JavaScript',
                  'React',
                  'Nodejs',
                  'PHP',
                  'MySQL',
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className='typed-style'
              />
              .
            </p>
          </div>
          <div className="intro-photo">
              <img src={profile} alt="Votre Nom" />
          </div>
        </div>
    </section>
  );
}
