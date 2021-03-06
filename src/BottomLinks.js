import React from 'react';
import { bottomLinks } from './bottomPageLinks'
import { Grid, Typography } from '@material-ui/core';
import logo from './Discord-Logo-White.svg'
import { Link } from 'react-router-dom';

function BottomLinks() {

  const bottomLinksKeys = Object.keys(bottomLinks)

  return (
    <Grid container >
      <Grid item xs={2} >
        <div style={{ backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 40, width: 40 }} />
      </Grid>
      <Grid item xs={10} style={{ display: 'flex' }}>
        {bottomLinksKeys.map((key, i) => (
          <Grid container justify='center' key={i}>
            <Grid item xs={12} style={{ padding: '0px 40px' }}>
              <Link to={`/${key}`} style={{ color: 'black', textTransform: 'none', textDecoration: 'none' }}>
                <Typography variant='caption' style={{ color: 'white', display: 'block', paddingBottom: 20 }}>{key}</Typography>
              </Link>
              {bottomLinks[key].map((element, i) => (
                <Typography key={i} variant='caption' style={{ color: 'hsla(0,0%,100%,.6)', display: 'block' }}>{element}</Typography>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default BottomLinks;
// {bottomLinksKeys.map((key, i) => (
//   <Grid container justify='center' key={i}>
//     <Grid item xs={12} style={{ padding: '0px 40px' }}>
//       <Typography variant='caption' style={{ color: 'white', display: 'block', paddingBottom: 20 }}>{key}</Typography>
//       {bottomLinks[key].map((element, i) => (
//         <Typography key={i} variant='caption' style={{ color: 'hsla(0,0%,100%,.6)', display: 'block' }}>{element}</Typography>
//       ))}
//     </Grid>
//   </Grid>
// ))}