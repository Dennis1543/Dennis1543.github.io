import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import ProfilePic from '../../assets/images/ProfileCircle.png'
import NameSubtitle from '../../assets/images/Name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faGamepad, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className = "nav-bar">
        <Link className="profilepic" to='/'>
            <img src={ProfilePic} alt="Profile Pic" />
            <img className="namepic" src={NameSubtitle} alt="Dennis Taylor Snyder" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="gamedev-link" to="/gamedev">
                <FontAwesomeIcon icon={faGamepad} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="webdev-link" to="/webdev">
                <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
    <ul>
        <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/taylorsnyder1543/"
            >
                <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Dennis1543"
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
    </ul>
    </div>
)

export default Sidebar