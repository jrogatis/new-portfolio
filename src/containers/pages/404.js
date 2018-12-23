import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    minHeight: '100vh',
    minWidth: '100vw',
  },
  grid: {
    paddingTop: '60px',
  },
});

const FourZeroFour = ({ classes }) => (
  <Grid container direction="column" alignItems="center" justify="center" className={classes.grid}>
    <Typography variant="h1" gutterBottom>
      404
    </Typography>
    <Typography variant="h3" gutterBottom align="center">
      Ops!!! algo deu errado... <br /> Se voce não acredita em conspirações sobrenaturais então:
      <br />
      Esta página não existe.
    </Typography>
    <Link to="/">voltar</Link>
  </Grid>
);

export default withStyles(styles)(FourZeroFour);
