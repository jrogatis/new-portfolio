import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import imgLeft from 'static/img/skyEsqV5.png';
import imgRight from 'static/img/skyDir.png';

const styles = theme => ({
  layoutRoot: {
    width: '100%',
    minHeight: 'calc(100vh - 35px)',
  },
});

const Home = ({ classes }) => (
  <Grid item xs={12} container className={classes.layoutRoot}>
    <Grid
      item
      xs={6}
      style={{
        backgroundImage: `url(${imgLeft})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: 'contain',
      }}
    />
    <Grid
      item
      xs={6}
      style={{
        backgroundImage: `url(${imgRight})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
        backgroundSize: 'contain',
      }}
    />
  </Grid>
);

export default withStyles(styles)(Home);
