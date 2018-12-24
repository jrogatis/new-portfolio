import React from 'react';
import { Grid, withStyles, Typography, AppBar } from '@material-ui/core';

const styles = () => ({
  bottonBar: {
    top: 'auto',
    bottom: 0,
    width: '100%',
  },
});

const Footer = ({ classes }) => (
  <AppBar position="fixed" className={classes.bottonBar} color="transparent">
    <Grid item xs={12} container justify="center">
      <Typography>BLA</Typography>
    </Grid>
  </AppBar>
);

export default withStyles(styles)(Footer);
