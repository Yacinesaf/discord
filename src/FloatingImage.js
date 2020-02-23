import React from 'react';
import img from './floating_img.png';



function FloatingImage() {
  return (
    <div style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', height : 380, width : '100%', overflow: 'hidden'}} />
  );
}

export default FloatingImage;