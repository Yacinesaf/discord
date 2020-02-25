import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import asset1 from './asset1.png'
import asset2 from './asset2.png'
import asset3 from './asset3.png'
import asset4 from './asset4.png'

function Main() {

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgOnly = useMediaQuery(theme.breakpoints.only('lg'));
  const versions = ['Mac', 'Android', 'iOS', 'Linux'];
  const assets = [asset1, asset2, asset3, asset4];
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {versions.map((x, i) => (
        <Card key={i} style={{ height: 320, width: 360, minWidth : 200, marginRight: mdDown ? 0 :20, borderRadius : mdDown ? 0 : 6}}>
          <div style={{margin: '45px 0px'}}>
            <Typography variant= {lgOnly ? 'h6' : 'h5'} style={{ textAlign: 'center', color: '#7289da'}}>
              {`Download for ${x}`}
            </Typography>
          </div>
          <div style={{
            backgroundImage: `url(${assets[i]})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: 200,
            width: '100%'
          }} />
        </Card>
      ))}
    </div>
  );
}

export default Main;