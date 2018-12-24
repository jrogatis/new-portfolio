import React, { Component, Fragment } from 'react';
import { withStyles, Grid, Collapse, CssBaseline } from '@material-ui/core';
import PublicRouter from 'router/publicRoutes';
import AppBar from 'components/AppBar';
import Footer from 'components/Footer';

const styles = theme => ({
  layoutRoot: {
    maxWidth: '1440px',
    zIndex: 1,
    backgroundColor: 'red',
    maxHeight: '75vh',
  },
  contentPage: {
    width: '100%',
    marginTop: '-35px',
  },
  appBarWrapper: {
    minHeight: '35px',
    backgroundColor: 'transparent',
    zIndex: 9999,
    overflow: 'auto',
  },
  root: {
    width: '100%',
  },
});

class Home extends Component {
  state = {
    appBarVisible: false,
  };

  onMouseEnterHandler = () => {
    this.setState({ appBarVisible: true });
  };
  onMouseLeaveHandler = () => {
    this.setState({ appBarVisible: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          className={classes.root}
        >
          <Grid item xs={12} container direction="column" className={classes.layoutRoot}>
            <Grid
              item
              xs={12}
              onMouseEnter={this.onMouseEnterHandler}
              className={classes.appBarWrapper}
              onMouseLeave={this.onMouseLeaveHandler}
            >
              <Collapse in={this.state.appBarVisible}>
                <AppBar />
              </Collapse>
            </Grid>
            <Grid item xs={12} className={classes.contentPage}>
              <PublicRouter />
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Fragment>
    );
  }
}

export default withStyles(styles)(Home);
