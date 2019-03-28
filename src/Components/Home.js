import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // height:'100vh',

  },
  container:{
    height:'100vh',
    // border:'3px solid black'
  },
  item:{

  },
  paper: {
    // padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="row"
        justify="center"
        alignItems="stretch"
        spacing={16}  
        className={classes.container}>
        <Grid item xs={4}  className={classes.item}>
          <Paper className={classes.paper}>xs=3</Paper>
          
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);