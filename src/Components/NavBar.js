import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function AppBarComponent(props) {

  let  logOutHandler = (event)=>{
      props.history.push('/signIn');
    let keysToRemove = ["ID", "USERNAME"];
    for (let key of keysToRemove) {
        localStorage.removeItem(key);
    }
    }
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              
            </IconButton>
            <Typography variant="h5" color="inherit" className={classes.grow}>
              Simple Chat Application
            </Typography>
            <Button color="inherit" onClick={logOutHandler}>LogOut</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  AppBarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AppBarComponent);