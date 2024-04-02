import React from "react";
import SNKRSLogo from '../styles/icons/snkrsLogoBlack.svg';
import NikeOfwhite from '../styles/img/nikeHomeOff.png'
import ShadowLogo from '../styles/img/shadow-logo.png';
import './_contentHome1.styles.scss';
import PngImage from "../atoms/Images/Image";

const ImageHome = () => {
    return (
            <div className="containerImage">
                <div className="containerHome">
                    <PngImage src= { SNKRSLogo } alt={ "Nike logo"} className="logo"/>
                    <PngImage src={ NikeOfwhite } alt={"Nike Air Force"} className="shoe"/>
                </div>
                    <PngImage src= { ShadowLogo } alt={ "shadow logo" } className="shadow" />
            </div>
    );
}

export default ImageHome;