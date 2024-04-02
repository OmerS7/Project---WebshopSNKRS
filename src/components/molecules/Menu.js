import { Link } from 'react-router-dom';
import './_menu.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Menu() {
    return (
        <div className="menu-screen">
            <ul>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">Info</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li> */}
                <div className='menu-Icons'>
                    <div className='insta'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className='youtube'>
                       <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className='youtube'>
                        <FontAwesomeIcon icon={faTiktok} />
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Menu;