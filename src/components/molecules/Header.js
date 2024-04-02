import React, { useEffect } from "react";
import HamburterTrigger from "../atoms/nav/MenuTrigger";
import products from "../atoms/products/Products";
// import SearchButton from "../atoms/Buttons/SearchButtton"; 
import SearchButton from "../atoms/Buttons/SearchBar";
import Logo from "../atoms/nav/Logo";
import ShoppingBagButton from "../atoms/nav/Shoppingbag";
import './_header.styles.scss';

const Header = () => {
    useEffect(() => {
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navBar');

        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                navbar.style.top = '-60px'; 
            } else {
                navbar.style.top = '0'; 
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

       
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, []); 

    return (
        <div className="navBar">
            <div className="leftSideNav">
                <ShoppingBagButton />
                <div className="searchButton">
                    <SearchButton products={products} /> 
                </div>
            </div>
            <div className="midSecNav">
                <Logo />
            </div>
            <div className="rightSecNav">
                <HamburterTrigger />
            </div>
        </div>
    );
}


export default Header;

