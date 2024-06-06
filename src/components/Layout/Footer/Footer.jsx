import './Footer.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faRankingStar, faUser} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

    const location = useLocation();

    const linksList = [
        {
            id: 'footer-link-1',
            icon: faFutbol,
            description: 'Mon Profil',
            url: '#myprofile',
        },
        {
            id: 'footer-link-2',
            icon: faRankingStar,
            description: 'Mes Projets',
            url: '#myprojects',
        },
        {
            id: 'footer-link-3',
            icon: faUser,
            description: 'Mes coordonnées',
            url: '#mycontact',
        }
    ]        

    return (
        <footer>
            <ul className='footer-links-list'>
                {linksList.map((link) => (
                    <li key={link.id}>
                        <NavLink to={link.url}>
                            <p className="description">{link.description}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
