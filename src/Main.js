import React from 'react';
import Nav from './Nav';
import { Grid } from '@material-ui/core';
import TextNextToFloatingImage from './TextNextToFloatingImage';
import FloatingImage from './FloatingImage';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DownloadVersionCards from './DownloadVersionCards'
function Main() {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ backgroundColor: '#7289da', height: '100vh' }}>
      <Grid container justify='center'>
        <Grid item xs={12} sm={12} xl={10} style={{padding : smDown ? 0 : '0px 15px'}}>
          <Nav />
        </Grid>
        <Grid item xs={12} md={11} lg={11}>
          <Grid container justify='center'>
            <Grid item xs={3} style={{ marginTop: smDown ? 50 : 150, minWidth : 285, marginRight : smDown ? 0 : 30 }}>
              <TextNextToFloatingImage />
            </Grid>
            <Grid item xl={5} lg={6} md={7} sm={11} xs={11}  style={{ marginTop: smDown ? 30 :  50 }}>
              <FloatingImage />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} style={{paddingTop : 100}}>
          <DownloadVersionCards />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
