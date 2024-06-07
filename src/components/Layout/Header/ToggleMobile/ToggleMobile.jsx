// HOOKS
import { HashLink } from 'react-router-hash-link';

// ASSETS
import './ToggleMobile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function ToggleMobile({linksList, isNavOpen, handleNav}) {

    if (!isNavOpen) return null;

    return (
        <nav className='header-toggle'>
            <FontAwesomeIcon onClick={() => handleNav()} className='close-button' icon={faClose}/>
            <ul className={`header-links-list toggle`}>
                {linksList.map((link) => (
                    <li key={`${link.id}-toggle`} className="item">
                    <HashLink to={link.url} onClick={() => handleNav()}>
                        <FontAwesomeIcon className='icon' icon={link.icon}/>
                        <p className="description">{link.description}</p>
                    </HashLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
