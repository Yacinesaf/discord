import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import FloatingImage from './FloatingImage';


function BodyContent() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{marginRight : 50}}>
        <h2 style={{ color: 'white', display: 'block', fontWeight: 500, margin: 0 }} >
          Get Discord for Windows
        </h2>
        <div style={{ display: 'flex', paddingTop: 5 }}>
          <Typography style={{ color: '#bfbfbf', fontSize: 12 }} >
            Living on the edge? Get the
          </Typography>
          <Typography style={{ color: 'white', paddingLeft: 4, fontSize: 12 }} >
            public Test Build
          </Typography>
        </div>
        <Button
          variant='contained'
          style={{ marginTop: 20, color: '#7289da', backgroundColor: 'white', textTransform: 'none', display: 'block', borderRadius: 2, width: 180 }}>
          Download Now
        </Button>
        <Typography style={{ color: '#bfbfbf', display: 'block', fontSize: 10, paddingTop: 3 }} >
          Windows 7 or higher
        </Typography>
      </div>
    </div>
  );
}

export default BodyContent;