import React, { useState, useEffect } from "react";
import SNKRSLogo from '../styles/icons/snkrsLogoBlack.svg';
import NikeOfwhite from '../styles/img/nikeHomeOff.png'
import ShadowLogo from '../styles/img/shadow-logo.png';
import './_contentHome1.styles.scss';
import PngImage from "../atoms/Images/Image";
// import Icon from "../atoms/Icons/Icon";
import ArrowDown from "../styles/img/ArrowDown.svg";
// import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const ImageHome = () => {
    const [hideArrow, setHideArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Hier kun je de waarde aanpassen waarbij je wilt dat de pijl verdwijnt
            if (scrollPosition > 300) {
                setHideArrow(true);
            } else {
                setHideArrow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="containerImage">
                <div className="containerHome">
                    <PngImage src= { SNKRSLogo } alt={ "Nike logo"} className="logo"/>
                    <PngImage src={ NikeOfwhite } alt={"Nike Air Force"} className="shoe"/>
                </div>
                <PngImage src= { ShadowLogo } alt={ "shadow logo" } className="shadow" />
            </div>
            <div className={`iconArrowDown ${hideArrow ? 'hidden' : ''}`}>
                <PngImage src={ ArrowDown } />
                {/* <Icon icon={faArrowDownLong}  color="white" /> */}
            </div>
        </div>
    );
}

export default ImageHome;