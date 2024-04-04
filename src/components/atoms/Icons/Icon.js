import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; 

library.add(
  faArrowDown
);

const Icon = ({ icon, size = 'lg', color = 'black', onClick }) => {
  return (
    <FontAwesomeIcon icon={icon} size={size} color={color} onClick={onClick} />
  );
};

export default Icon;
