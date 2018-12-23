import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  mainHeader: {
    padding: '0 10px',
    boxShadow: 'none',
    width: '100%',
    backgroundColor: 'transparent',
    minHeight: '35px',
  },
  version: {
    marginLeft: 10,
  },
});

const mainHeader = ({ classes }) => (
  <AppBar className={classes.mainHeader} position="static">
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs={4} container direction="row" justify="flex-start" alignItems="center">
        <Grid item>
          <Typography className={classes.version}>{process.env.appVersion}</Typography>
        </Grid>
      </Grid>
      <Grid item>Login</Grid>
    </Grid>
  </AppBar>
);

mainHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(mainHeader);
