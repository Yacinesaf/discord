import React from 'react';
import Nav from './Nav';
import { Grid } from '@material-ui/core';
import BodyContent from './BodyContent';
import FloatingImage from './FloatingImage';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Main() {

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ backgroundColor: '#7289da', height: '100vh' }}>
      <Grid container justify='center'>
        <Grid item xs={10}>
          <Nav />
          <Grid container>
          <Grid item xs={2}></Grid>
            <Grid item xs={4} style={{marginTop : 150}}>
              <BodyContent />
            </Grid>
            <Grid item xs={6} style={{marginTop : 50}}>
              <FloatingImage />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
