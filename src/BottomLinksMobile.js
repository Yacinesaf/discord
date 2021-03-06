import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { bottomLinks } from './bottomPageLinks'
import { Grid, Typography } from '@material-ui/core';
import logo from './Discord-Logo-White.svg'

function BottomLinksMobile() {

  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const bottomLinksKeys = Object.keys(bottomLinks)

  return (
    <Grid container justify='center'>
      <div style={{paddingRight : xsOnly ? 100 : 250}}>
        <div style={{ backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 40, width: 40, marginBottom: 40 }} />
        {[0, 1].map((x) => (
          <Grid container justify='center' key={x}>
            <Grid item xs={12} style={{ padding: '40px 0px' }}>
              <Typography variant='caption' style={{ color: 'white', display: 'block', paddingBottom: 10 }}>{bottomLinksKeys[x]}</Typography>
              {bottomLinks[bottomLinksKeys[x]].map((element, i) => (
                <Typography key={i} variant='caption' style={{ color: 'hsla(0,0%,100%,.6)', display: 'block' }}>{element}</Typography>
              ))}
            </Grid>
          </Grid>
        ))}
      </div>
      <div>
        {[2, 3, 4].map((y) => (
          <Grid container justify='center' key={y}>
            <Grid item xs={12} style={{ paddingBottom: 38 }}>
              <Typography variant='caption' style={{ color: 'white', display: 'block', paddingBottom: 10 }}>{bottomLinksKeys[y]}</Typography>
              {bottomLinks[bottomLinksKeys[y]].map((element, i) => (
                <Typography key={i} variant='caption' style={{ color: 'hsla(0,0%,100%,.6)', display: 'block' }}>{element}</Typography>
              ))}
            </Grid>
          </Grid>
        ))}
      </div>
    </Grid>
  );
}

export default BottomLinksMobile;