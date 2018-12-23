import React, { Component } from 'react';
import { withStyles, Grid, Collapse } from '@material-ui/core';
import PublicRouter from 'router/publicRoutes';
import AppBar from 'components/AppBar';

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
    // height: 'calc(100vh - 100px)',
    overflow: 'auto',
  },
  appBarWrapper: {
    minHeight: '35px',
    backgroundColor: 'transparent',
    width: '100%',
    zIndex: 9999,
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
      <Grid container diretion="column" className={classes.layoutRoot}>
        <div
          onMouseEnter={this.onMouseEnterHandler}
          className={classes.appBarWrapper}
          onMouseLeave={this.onMouseLeaveHandler}
        >
          <Collapse in={this.state.appBarVisible}>
            <AppBar />
          </Collapse>
        </div>
        <Grid item xs={12} className={classes.contentPage}>
          <PublicRouter />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
