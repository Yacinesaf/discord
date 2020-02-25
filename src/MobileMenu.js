import React from 'react';
import { Slide, Paper, Divider, List, ListItem } from '@material-ui/core';
import discordLogoMobile from './Discord-Logo+Wordmark-White.svg'
import CloseIcon from '@material-ui/icons/Close';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function MobileMenu({ showSlideMenu, closeSlideMenu, showSlide, slideExited }) {



  return (
    <Slide
      onExited={closeSlideMenu}
      style={{ position: "absolute", width: '100%', zIndex: 1 }}
      direction='down'
      in={showSlideMenu}
      timeout={200}
    >
      <Paper style={{ backgroundColor: 'black' }}>
        <List style={{paddingBottom : 0}}>
          <ListItem button >
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div style={{ flexGrow: 1 }}>
                <div style={{ backgroundImage: `url(${discordLogoMobile})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 30, width: 90 }} />
              </div>
              <CloseIcon style={{ color: 'white' }} onClick={closeSlideMenu} />
            </div>
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px', display: 'flex', justifyContent: 'center' }}>
            <p style={{color: 'white', fontWeight: 100, margin : 0, fontSize : 12 }}>
              Download
            </p>
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px', display: 'flex', justifyContent: 'center' }}>
            <p style={{color: 'white', fontWeight: 100, margin : 0, fontSize : 12 }}>
              Nitro
            </p>
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px', display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'white', fontWeight: 100, margin : 0, fontSize : 12 }}>
              Jobs
            </p>
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'white', fontWeight: 100, margin : 0, fontSize : 12 }}>Developers</p>
            <ExpandMoreIcon fontSize='small' style={{ color: 'white'}} />
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'white', fontWeight: 100, margin : 0, fontSize : 12 }}>Community</p>
            <ExpandMoreIcon fontSize='small' style={{ color: 'white' }} />
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'white', fontWeight: 100, margin : 0, fontSize : 12 }}>Support</p>
            <ExpandMoreIcon fontSize='small' style={{ color: 'white' }} />
          </ListItem>
          <ListItem style={{ padding: '10px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TranslateIcon style={{ color: 'white' }} />
            <ExpandMoreIcon fontSize='small' style={{ color: 'white' }} />
          </ListItem>
        </List>
      </Paper>
    </Slide>
  );
}

export default MobileMenu;