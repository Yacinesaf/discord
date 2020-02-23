import React, { useState } from 'react';
import { Toolbar, Button, Divider } from '@material-ui/core';
import discordLogoMobile from './Discord-Logo+Wordmark-White.svg'
import discordLogo from './Discord-Logo-White.svg'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { menuItems } from './menuItems'
import NavMenus from './NavMenus'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import MobileMenu from './MobileMenu';

function Nav() {

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const buttonStyle = {
    textTransform: 'none',
    color: '#ededed',
  }
  const menuItemsKeys = Object.keys(menuItems)
  const [showSlideMenu, setShowSlideMenu] = useState(false);

  const closeSlideMenu = () => {
    setShowSlideMenu(false)
  }


  return (
    <div>
        <MobileMenu
        showSlideMenu={showSlideMenu} 
        closeSlideMenu={closeSlideMenu} />
        <Toolbar style={{ paddingTop: smDown ? 0 : 10 }}>
        <div style={{ flexGrow: 1, display: smDown ? '' : 'none' }}>
          <div style={{ backgroundImage: `url(${discordLogoMobile})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 30, width: 90 }} />
        </div>
        <MenuIcon style={{ color: 'white', display: smDown ? '' : 'none' }} onClick={() => { setShowSlideMenu(true)}} />
        <div style={{ backgroundImage: `url(${discordLogo})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 50, width: 50, display: smDown ? 'none' : '' }} />
        <div style={{ paddingLeft: 10, flexGrow: 1, display: smDown ? 'none' : 'flex' }}>
          <Button style={buttonStyle}>
            Download
          </Button>
          <Button style={buttonStyle}>
            Nitro
          </Button>
          <Button style={buttonStyle}>
            Jobs
          </Button>
          <div style={{ display: 'flex' }}>
            {menuItemsKeys.map((x, i) => (
              <NavMenus key={i} buttonStyle={buttonStyle} menuItemKey={x} />
            ))}
          </div>
        </div>
        <div style={{ display: mdDown ? 'none' : '', paddingTop: 6 }}>
          <FacebookIcon style={{ color: '#ededed' }} />
          <TwitterIcon style={{ color: '#ededed', padding: '0px 10px' }} />
          <InstagramIcon style={{ color: '#ededed' }} />
        </div>
        <div style={{ display: smDown ? 'none' : 'flex', alignItems: 'center' }}>
          <Button variant='outlined' style={Object.assign({}, buttonStyle, { borderRadius: 20, borderColor: '#ededed', margin: '0px 15px', padding: '5px 20px' })}>
            Login
          </Button>
          <Divider style={{ transform: 'rotate(90deg)', width: 18, backgroundColor: '#ededed' }} />
          <Button style={buttonStyle}>
            <TranslateIcon />
            <ExpandMoreIcon />
          </Button>
        </div>
      </Toolbar>
    </div>
  );
}

export default Nav;
