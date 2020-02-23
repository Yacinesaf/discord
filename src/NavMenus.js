import React from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {menuItems} from './menuItems'


function NavMenus({ menuItemKey, buttonStyle }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button style={buttonStyle} onClick={handleClick}>
        {menuItemKey}
        <ExpandMoreIcon fontSize='small' />
      </Button>
      <Menu
        getContentAnchorEl={null}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems[menuItemKey].map((x, i) => (
          <MenuItem key={i} onClick={handleClose}>{x}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default NavMenus;
