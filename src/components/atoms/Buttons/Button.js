import React, { useState } from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './_button.styles.scss'

function Button({ variant, icon, label, onClick, ...props }) {
    const [isSelected, setIsSelected] = useState(false);
  
    const handleButtonClick = (event) => {
      setIsSelected(!isSelected);
      if (onClick) {
        onClick(event);
      }
    };
  
    return (
      <button
        className={`button ${variant} ${isSelected ? 'selected' : ''}`}
        onClick={handleButtonClick}
        {...props}
      >
        {label && <span className="button-text">{label}</span>}
        {icon && <FontAwesomeIcon icon={icon} />}
      </button>
    );
  }

  Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'white', 'trash', 'back']),
    onClick: PropTypes.func,
  };

export default Button;