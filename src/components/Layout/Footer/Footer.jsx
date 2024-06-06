import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

    const contactInfos = [
        {
            id: 'footer-link-1',
            icon: faPhone,
            description: '+33 7 12 30 14 75',
        },
        {
            id: 'footer-link-2',
            icon: faEnvelope,
            description: 'charbonnier.nicolas@outlook.fr',
        },
        {
            id: 'footer-link-3',
            icon: faHouse,
            description: '64100 Bayonne',
        }
    ]        

    return (
        <footer id="mycontact">
            <ul className='footer-links-list'>
                {contactInfos.map((info) => (
                    <li className='item' key={info.id}>
                        <FontAwesomeIcon className='icon' icon={info.icon}/>
                        <span>{info.description}</span>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
