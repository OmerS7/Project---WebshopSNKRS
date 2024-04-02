import { useEffect } from "react";
import Text from '../atoms/Texts/Text';
import Footer from "../molecules/Footer";
import Header from "..//molecules/Header";
import './_infopage.styles.scss';
import PngImage from "../atoms/Images/Image";
import NikeTerra from '../styles/img/NikeTerra.png';
import NikeAir from '../styles/img/NikeAirBlue.png';


function InfoPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Header />
            <div className="content3">
                <div className="contentFirst">
                    <Text content="This webpage has been created by a web developer for demonstrative purposes, serving as a project aimed at honing skills in React development. Please note that this site is purely fictitious and is not intended for actual commercial transactions 
                                Visit the nike store www.nike.com to buy yourself shoes. " />
                    <PngImage src= { NikeTerra } alt={ "Nike logo"} className="logo9"/>
                </div>
            </div>
            <div className="content4">
             <div className="contentSecond">
                    <PngImage src= { NikeAir } alt={ "Nike logo"} className="logo9"/>
                    <Text content="If you want to see other React project like this,
                                Visit my githubprofile www.github.com or look
                                at my online portfolio www.omer.com. " />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default InfoPage;