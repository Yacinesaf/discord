import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function TextNextToFloatingImage() {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  
  
  return (
      <div>
        <p style={{ color: 'white', display: 'block', fontWeight: 500, margin: 0, fontSize : 25 }} >
          Get Discord for Windows
        </p>
        <div style={{ display: 'flex', paddingTop: 5, justifyContent : smDown ? 'center' : '' }}>
          <Typography style={{ color: 'hsla(0,0%,100%,.6)', fontSize: 12 }} >
            Living on the edge? Get the
          </Typography>
          <Typography style={{ color: 'white', paddingLeft: 4, fontSize: 12 }} >
            public Test Build
          </Typography>
        </div>
        <Button
          disableElevation
          variant='contained'
          style={{marginTop: 20,marginLeft : smDown ?  'calc((285px - 210px) / 2)' : 0, color: '#7289da', backgroundColor: 'white', textTransform: 'none', display: 'block', borderRadius: 3, width: 210 }}>
          Download Now
        </Button>
        <Typography style={{ color: 'hsla(0,0%,100%,.6)', display: 'block', fontSize: 12, paddingTop: 5, textAlign : smDown ? 'center' : '' }} >
          Windows 7 or higher
        </Typography>
      </div>
  );
}

export default TextNextToFloatingImage;