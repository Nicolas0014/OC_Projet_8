// HOOKS
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// ASSETS
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faRankingStar, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const linksList = [
        {
            id: 'header-link-1',
            icon: faFutbol,
            description: 'Mon Profil',
            url: '#myprofile',
        },
        {
            id: 'header-link-2',
            icon: faRankingStar,
            description: 'Mes Projets',
            url: '#myprojects',
        },
        {
            id: 'header-link-3',
            icon: faUser,
            description: 'Mes coordonnées',
            url: '#mycontact',
        }
    ]        

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header>
            <nav>
                <ul className='header-links-list'>
                    {linksList.map((link) => (
                        <li key={link.id} className="item">
                            <NavLink to={link.url}>
                                <FontAwesomeIcon icon={link.icon}/>
                                <p className="description">{link.description}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {/* <FontAwesomeIcon className='icon-burger' icon={faBars} onClick={() => handleNav()}/> */}
            </nav>
        </header>
    );
}
