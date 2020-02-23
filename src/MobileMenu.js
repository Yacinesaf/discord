import React from 'react';
import { Slide, Paper, Divider, List, ListItem, ListItemText, ListItemIcon  } from '@material-ui/core';
import discordLogoMobile from './Discord-Logo+Wordmark-White.svg'
import CloseIcon from '@material-ui/icons/Close';

function MobileMenu() {
  return (
    <div>
      <Slide>
        <Paper style={{backgroundColor : 'black'}}>
          <List>
            <ListItem button >
              
            </ListItem>
          </List>
          <div style={{display : 'flex'}}>
            <div style={{ backgroundImage: `url(${discordLogoMobile})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 50, width: 150}} />
            <CloseIcon style={{color : 'white'}} />
          </div>
        </Paper>
      </Slide>
    </div>
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