import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./main.scss";
import HomePage from "./components/pages/HomePage";
import InfoPage from './components/pages/InfoPage';
import { ShoppingCartProvider } from './components/atoms/ShoppingCard';
import ShoppingBagPage from './components/pages/ShoppingCardPage';
import ShopPage from './components/pages/ShopPage';
import ThanksPage from './components/pages/CheckoutPage';
import ProductDetail from './components/molecules/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<InfoPage />} />
        <Route path="/shoppingBag" element={<ShoppingBagPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} />
        <Route path="/thanks" element ={<ThanksPage />} />
      </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;