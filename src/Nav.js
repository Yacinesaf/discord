import React from 'react';
import { Toolbar, Button, Divider } from '@material-ui/core';
import discordLogo from './Discord-Logo+Wordmark-White.svg'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { menuItems } from './menuItems'
import NavMenus from './NavMenus'


function Nav() {
  const buttonStyle = {
    textTransform: 'none',
    color: '#fff',
  }
  const menuItemsKeys = Object.keys(menuItems)
  
  return (
    <div>
      <Toolbar style={{ paddingTop: 10 }}>
        <div style={{ backgroundImage: `url(${discordLogo})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 50, width: 150 }} />
        <div style={{ paddingLeft: 10, flexGrow: 1, display : 'flex' }}>
          <Button style={buttonStyle}>
            Download
        </Button>
          <Button style={buttonStyle}>
            Nitro
        </Button>
          <Button style={buttonStyle}>
            Jobs
        </Button>
          <div style={{display : 'flex'}}>
            {menuItemsKeys.map((x, i) => (
              <NavMenus key={i} buttonStyle={buttonStyle} menuItemKey={x} />
            ))}
          </div>
        </div>
        <FacebookIcon style={{ color: 'white' }} />
        <TwitterIcon style={{ color: 'white', padding: '0px 10px' }} />
        <InstagramIcon style={{ color: 'white' }} />
        <Button variant='outlined' style={Object.assign({}, buttonStyle, { borderRadius: 20, borderColor: 'white', margin: '0px 15px', padding: '5px 20px' })}>
          Login
      </Button>
        <Divider style={{ transform: 'rotate(90deg)', width: 18, backgroundColor: 'white' }} />
        <Button style={buttonStyle}>
          <TranslateIcon />
          <ExpandMoreIcon />
        </Button>
      </Toolbar>

    </div>
  );
}

export default Nav;
