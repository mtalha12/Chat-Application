import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import AddFriendComponent from "./AddFriend";


const styles = {
    root: {
      flexGrow: 1,
    },
    mainDiv : {
        backgroundColor: '#282c34',
        width: '100%',
    },
    friendsDiv : {
        backgroundColor : 'red',
        backgroundColor : 'blue',
        width : '20%',
    },
    chatDiv : {
        backgroundColor : 'black',
        width : '20%',
    },
    addPeopleDiv : {
        backgroundColor : 'yellow',
        width : '20%',
    },

   
  }

class DashBoardComponent extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        const { classes } = this.props;
        return( 
           
               <div className="mainDiv">
                    <AddFriendComponent />
                   {/* <div className="friendsDiv">Hello friendsDiv</div>
                   <div className="chatDiv">chatDiv</div>
                   <div className="addPeopleDiv">addPeopleDiv</div> */}
               </div>
              
        
        )
    }
}
export default withStyles(styles)(DashBoardComponent)