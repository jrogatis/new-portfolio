import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import PublicRouter from 'router/publicRoutes';

const styles = theme => ({
  layoutRoot: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    backgroundColor: 'blue',
  },
  contentPage: {
    width: '100%',
    height: 'calc(100vh - 100px)',
    overflow: 'auto',
  },
  containerPage: {
    backgroundColor: 'transparent',
    padding: '25px',
    width: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
  },
});

const Home = ({ classes }) => (
  <Grid container diretion="column" className={classes.layoutRoot}>
    <Grid item xs={12} className={classes.contentPage}>
      <PublicRouter />
    </Grid>
  </Grid>
);

export default withStyles(styles)(Home);
