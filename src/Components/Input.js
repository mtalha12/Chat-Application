import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    textField : {
        width : '80%'
        // border : '1px solid black'
    }
  });

class InputComponent extends Component {
    constructor(){
        super();
        this.state = {
            messsage : '',
        }
    }


    render(){
        const { classes } = this.props;
        return(
            <div>
                <TextField
                id="outlined-multiline-flexible"
                // label="Type a message"
                multiline
                rowsMax="2"
                // value={this.state.multiline}
                onChange={this.props.goInputHandler}
                name="message"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                placeholder="Type a message"
            />
                 <Button 
                type='Button' 
                onClick={this.props.goSendClickHandler}
                variant="contained" 
                color="primary" 
                className={classes.input}
                // className={classes.button}
                >
                Send
                </Button>
            </div>
        )
    }
}
export default withStyles(styles)(InputComponent)