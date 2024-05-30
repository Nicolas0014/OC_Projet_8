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
            description: 'Matchs',
            url: '/matches',
        },
        {
            id: 'footer-link-2',
            icon: faRankingStar,
            description: 'Classement',
            url: '/leaderboard',
        },
        {
            id: 'footer-link-3',
            icon: faUser,
            description: 'Compte',
            url: '/account',
        }
    ]        

    return (
        <footer>
            <ul className='footer-links-list'>
                {linksList.map((link) => (
                    <li key={link.id} className={`item ${location.pathname === link.url ? 'active' : ''}`}>
                        <NavLink to={link.url}>
                            <FontAwesomeIcon icon={link.icon}/>
                            <p className={`description ${location.pathname === link.url ? 'active' : ''}`}>{link.description}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
