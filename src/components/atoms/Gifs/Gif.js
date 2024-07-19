// import React from "react";

// const GifComponent = ({ src, alt, className }) => {
//   return (
//     <video autoPlay loop muted className={className}>
//       <source src={src} type="video/gif" />
//       Your browser does not support the video tag.
//     </video>
//   );
// };
// {/* <GifComponent src={Gif1} className="model4" /> */}

// export default GifComponent;

import React from 'react';
import myGif from '../../styles/img/nikeLogo.gif';

const Gif = () => {
  return (
    <img src={myGif} alt="Mijn GIF" />
  );
};

export default Gif;