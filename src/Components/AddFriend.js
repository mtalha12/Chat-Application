import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    // userName : {
    //     padding : '20px',
    //     // margin : '20px',
    // },
    inline : {
        display : 'flex'
    }
    // chip:{
    //     width : '200px',
    //     height : '90px'
    // },

    // root: {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   flexWrap: 'wrap',
    // },
    // chip: {
    //   margin: theme.spacing.unit,
    // },
  });



 function AddFrinendComponent (props)  {
        const { classes } = props;
        console.log('Hello' + props.getAllUsers);
        let allUsers = props.getAllUsers;
        console.log(allUsers);
        const AllUsers = [];
        console.log(AllUsers,"ok")
        for (let key in allUsers){
            const users = allUsers[key];
            console.log(users); 
            console.log(users.userName)
            AllUsers.push(users)
        }
        return(
            <div>
                {AllUsers.map(user => (
                    <div className={classes.inline}>
                    <div>
                    <Typography className={classes.userName}>{user.userName}</Typography>
                    {/* <Button>{user.userName}</Button> */}
                    {/* <p>{user.userName}</p> */}
                    </div>
                    <div>
                    {/* <Button className={classes.btn}>Add Friend</Button> */}
                    <button onClick={()=> {props.gotoAddFriend(user.uid,user.userName)}}>Add Friend</button>
                    </div>
                    </div>
                ))}
                {/* <Typography>{AllUsers.userName}</Typography>
                {/* <Chip label="Basic Chip" className={classes.chip} />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
        onClick={this.clickHandler}
        className={classes.chip}
      /> */}
            </div>
        )
    }
export default withStyles(styles)(AddFrinendComponent)