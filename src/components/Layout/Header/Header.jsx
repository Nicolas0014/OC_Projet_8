// HOOKS
import { HashLink } from 'react-router-hash-link';

// ASSETS
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faGear, faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

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

    // const [isNavOpen, setIsNavOpen] = useState(false);

    // const handleNav = () => {
    //     setIsNavOpen(!isNavOpen);
    // };

    return (
        <header>
            <nav>
                <ul className='header-links-list'>
                    {linksList.map((link) => (
                        <li key={link.id} className="item">
                            <HashLink to={link.url}>
                                <FontAwesomeIcon className='icon' icon={link.icon}/>
                                <p className="description">{link.description}</p>
                            </HashLink>
                        </li>
                    ))}
                </ul>
                {/* <FontAwesomeIcon className='icon-burger' icon={faBars} onClick={() => handleNav()}/> */}
            </nav>
        </header>
    );
}
