import React, { useState, } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from '../../styles/icons/searchButton.svg';
import './_searchButton.styles.scss';

function SearchButton({ products }) { 
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [searchText, setSearchText] = useState(''); 
    const [searchResults, setSearchResults] = useState([]); 
    const [showNoResults, setShowNoResults] = useState(false); 

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
        setSearchResults([]);
        setShowNoResults(false);
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSearchResults(filteredProducts.slice(0, 3));
        setShowNoResults(filteredProducts.length === 0 && event.target.value.trim() !== '');
    };


    return (
        <div className="search-container">
            <div className="searchIcon" onClick={toggleSearch}>
                <SearchIcon />
            </div>
            {isSearchVisible && (
                <div className="search-results">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                    {searchResults.length > 0 && ( 
                        <ul className="SearchOptions">
                            {searchResults.map(product => (
                                <li key={product.id} className="productSearchBar">
                                    <Link className="linkTekst" to={`/productdetail/${product.id}`}>
                                        {product.name}
                                        <img src={product.imgSrc} alt={product.name} className="search-result-image" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    {showNoResults && <p className="SearchOptions">No results found</p>} 
                </div>
            )}
        </div>
    );
}

export default SearchButton;