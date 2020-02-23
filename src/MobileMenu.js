import React from 'react';
import { Slide, Paper, Divider, List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
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
        <List>
          <ListItem button >
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div style={{ flexGrow: 1 }}>
                <div style={{ backgroundImage: `url(${discordLogoMobile})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 30, width: 90 }} />
              </div>
              <CloseIcon style={{ color: 'white' }} onClick={closeSlideMenu} />
            </div>
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px' }}>
            <ListItemText primaryTypographyProps={{ variant: 'subtitle2' }} style={{ textAlign: "center", color: 'white', margin: 0 }}>
              Download
              </ListItemText>
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px' }}>
            <ListItemText primaryTypographyProps={{ variant: 'subtitle2' }} style={{ textAlign: "center", color: 'white', margin: 0 }}>
              Nitro
              </ListItemText>
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px' }}>
            <ListItemText primaryTypographyProps={{ variant: 'subtitle2' }} style={{ textAlign: "center", color: 'white', margin: 0 }}>
              Jobs
              </ListItemText>
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='subtitle2' style={{ color: 'white' }}>Developers</Typography>
            <ExpandMoreIcon fontSize='small' style={{ color: 'white' }} />
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='subtitle2' style={{ color: 'white' }}>Community</Typography>
            <ExpandMoreIcon fontSize='small' style={{ color: 'white' }} />
          </ListItem>
          <Divider variant='fullWidth' style={{ backgroundColor: '#595959' }} />
          <ListItem style={{ padding: '10px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='subtitle2' style={{ color: 'white' }}>Support</Typography>
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

// <Divider style={{width : '100%'}} />
// <Typography style={{textAlign : 'center', padding : '20px 0px'}}>Download</Typography>
// <Divider style={{width : '100%'}} />
// <Typography style={{textAlign : 'center', padding : '20px 0px'}}>Nitro</Typography>
// <Divider style={{width : '100%'}} />
// <Typography style={{textAlign : 'center', padding : '20px 0px'}}>Jobs</Typography>
// <Divider style={{width : '100%'}} />
// <Typography style={{textAlign : 'center', padding : '20px 0px'}}>Developers</Typography>
// <Divider style={{width : '100%'}} />
// <Typography style={{textAlign : 'center', padding : '20px 0px'}}>Community</Typography>
// <Divider style={{width : '100%'}} />
// <Typography style={{textAlign : 'center', padding : '20px 0px'}}>Support</Typography>