import React from 'react';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import ShopContent from '../molecules/ShopContent';

const ShopPage = () => {
    return(
        <div>
            <div className="Header">
                <Header />
            </div>            
        <ShopContent />
        <Footer />
        </div>
    );
}

export default ShopPage;