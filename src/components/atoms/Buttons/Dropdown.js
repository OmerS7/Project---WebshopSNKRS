import React, { useState } from 'react';
import './_dropdown.style.scss';

const DropdownMenu = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      onSelect(option);
      setIsOpen(false); 
    };
  
    return (
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedOption || 'Size'}
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((size, index) => (
              <li key={index} onClick={() => handleOptionClick(size)}>
                {size}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default DropdownMenu;