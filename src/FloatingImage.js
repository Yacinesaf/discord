import React from 'react';
import img from './floating_img.png';
import './FloatingEffect.css'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';




function FloatingImage() {

  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <div>
      <div
        className='floating'
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          height: xsOnly ? 230 :  430, 
          width: '100%'
        }} />
      <div
          style={{
            width: '100%', height: 58,
            background: 'radial-gradient(ellipse 38% 30%,rgba(0,0,0,.16),#738bd7)',
            animation: 'floatShadow 2.3s infinite forwards'
          }} />
    </div>
  );
}

export default FloatingImage;