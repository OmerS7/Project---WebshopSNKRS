import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './_footer.styles.scss';
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Webapp made by Ömer</p>
            <div className="footerSocials">
                <div className='insta'>
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className='youtube'>
                    <FontAwesomeIcon icon={faTiktok} />
                </div>
                <div className='youtube'>
                   <FontAwesomeIcon icon={faYoutube} />                    
                </div>
            </div>
            <p><FontAwesomeIcon icon={faCopyright} />  Ömer Seker</p>
        </footer>
    );
}
export default Footer;