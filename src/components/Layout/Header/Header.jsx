// HOOKS
import { HashLink } from 'react-router-hash-link';
import useWindowSize from '@components/Hooks/useWindowSize';
import { useState } from 'react';

// ASSETS
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faGear, faAddressCard, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const { width } = useWindowSize();
    const isMobile = width < 768;

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const linksList = [
        {
            id: 'header-link-1',
            icon: faUser,
            description: 'Mon Profil',
            url: '#myprofile',
        },
        {
            id: 'header-link-2',
            icon: faGear,
            description: 'Technos & Outils',
            url: '#mytechs',
        },
        {
            id: 'header-link-3',
            icon: faFolderOpen,
            description: 'Mes Projets',
            url: '#myprojects',
        },
        {
            id: 'header-link-4',
            icon: faAddressCard,
            description: 'Mes coordonnées',
            url: '#mycontact',
        }
    ]        

    const linksListMobile = [
        {
            id: 'header-link-mobile-1',
            icon: faUser,
            description: 'Mon Profil',
            url: '#myprofile',
        },
        {
            id: 'header-link-mobile-2',
            icon: faBars,
            onClick: () => handleNav(),
            description: '',
        }
    ]        


    return (
        <header>
            <nav>
                <ul className={`header-links-list ${isMobile && 'mobile'}`}>
                    {isMobile ? 
                    linksListMobile.map((link) => (
                        <li key={link.id} className="item">
                        <HashLink to={link.url}>
                            <FontAwesomeIcon className='icon' icon={link.icon}/>
                            <p className="description">{link.description}</p>
                        </HashLink>
                        </li>
                    )) 
                    : linksList.map((link) => (
                        <li key={link.id} className="item">
                            <HashLink to={link.url}>
                                <FontAwesomeIcon className='icon' icon={link.icon}/>
                                <p className="description">{link.description}</p>
                            </HashLink>
                        </li>
                    ))}
                </ul>
            </nav>
            {isNavOpen && (
                <nav>
                    {linksList.map((link) => (
                        <li key={`${link.id}-mobile`} className="item">
                            <HashLink to={link.url}>
                                <FontAwesomeIcon className='icon' icon={link.icon}/>
                                <p className="description">{link.description}</p>
                            </HashLink>
                        </li>
                    ))}
                </nav>
            )}
        </header>
    );
}
