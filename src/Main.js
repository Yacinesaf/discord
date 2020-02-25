import React from 'react';
import Nav from './Nav';
import { Grid, Divider, Typography, Button } from '@material-ui/core';
import TextNextToFloatingImage from './TextNextToFloatingImage';
import FloatingImage from './FloatingImage';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DownloadVersionCards from './DownloadVersionCards'
import BottomLinks from './BottomLinks';
import BottomLinksMobile from './BottomLinksMobile';
import { useParams } from 'react-router-dom'

function Main() {
  let { title } = useParams('Windows');
  const theme = useTheme(); 
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div style={{ backgroundColor: '#7289da', height: '170vh' }}>
      <Grid container justify='center'>
        <Grid item xs={12} sm={12} xl={10}>
          <Nav />
        </Grid>
        <Grid item xs={12} md={11} lg={11}>
          <Grid container justify='center'>
            <Grid item xs={3} style={{ marginTop: smDown ? 50 : 150, minWidth: 285, marginRight: smDown ? 0 : 30 }}>
              <TextNextToFloatingImage title={title} />
            </Grid>
            <Grid item xl={5} lg={6} md={7} sm={11} xs={11} style={{ marginTop: smDown ? 30 : 50 }}>
              <FloatingImage />
            </Grid>
          </Grid>
        </Grid>
        {smDown ? null :
          <Grid item md={12} lg={10} style={{ padding: mdDown ? '100px 15px ' : '100px 0px' }}>
            <DownloadVersionCards />
          </Grid>
        }
      </Grid>
      {smDown ? null :<Divider style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', marginBottom: 100 }} variant='fullWidth' />}
      <Grid container justify='center'>
        <Grid item xl={10} xs={11} md={11} style={{ padding: '0px 20px'}}>
          {smDown ? <BottomLinksMobile /> : <BottomLinks />}
        </Grid>
      </Grid>
      {smDown ? null : <Divider style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', margin: '50px 0px' }} variant='fullWidth' />}
      <Grid container justify='center'>
        <Grid item xl={10} md={11} style={{ display: smDown ? '' : 'flex', alignItems: 'center', textAlign : smDown ?  'center' : "" }}>
          <div style={{ flexGrow: 1 }}>
            <Typography variant='h5' style={{ color: 'white', display: 'block' }}>Ready to try Discord? It's free!</Typography>
            <Typography variant='subtitle2' style={{ color: 'hsla(0,0%,100%,.6)', display: 'block', textAlign : smDown ? 'center' : '' }}>JOIN OVER 250 MILLION PLAYERS TODAY</Typography>
          </div>
          <Button disableElevation variant='contained' style={{ textTransform: 'none', color: '#7289da', backgroundColor: 'white', padding: '10px 20px', borderRadius: 3, fontSize: 16, marginTop : smDown ? 10 : 0}}>Sign Up Now</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
