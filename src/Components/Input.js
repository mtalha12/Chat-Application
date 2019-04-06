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
        width : '85%'
        // border : '1px solid black'
    },
    input : {
     width : '14%',
      // marginVertical : '3%',
      marginTop : '1%',
      height : '55px',
    },
  });

class InputComponent extends Component {
    constructor(){
        super();
        this.state = {
            message : '',
        }
    }
    nameHandler = (event) => {
      this.setState({
          message: event.target.value,
      })
    } 
    SendClickHandler = (event) =>{
      const msg = this.state.message
        this.setState({
              message : '',
            });
      this.props.gotoSendClickHandler(msg);
    }

    render(){
        const { classes } = this.props;
        return(
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <TextField
                id="outlined-multiline-flexible"
                // label="Type a message"
                multiline
                rowsMax="2"
                value={this.state.message}
                onChange={this.nameHandler}
                name="message"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                placeholder="Type a message"
            
            />
                 <Button 
                type='Button' 
                onClick={this.SendClickHandler}
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
// onScroll={(event) => {console.log(event.target.scroll)}}
//onScroll={this.chatScroll}
export default withStyles(styles)(InputComponent)