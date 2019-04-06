import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ScrollToBottom, { scrollToBottom } from 'react-scroll-to-bottom';
import { Paper } from '@material-ui/core';


const styles = theme => ({
    userName: {
        whiteSpace: 'pre-wrap',
    },
    inline: {
        display: 'flex',
        border: '1px solid black'
    },
    nameDiv: {
        //  border : '1px solid blue',
        width: '50%',
        padding: '2% '
    },
    btnDiv: {
        // border : '1px solid red',
        padding: '2%'
    },
    // Scroll: {
    //     // height: '86%',
    //     height: 'calc(100vh - 50px)',
    
    // },
    // chat: {
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     border: '1px solid black',
    //     height: 'calc(100vh - 50px)',
    //     // overflowY:'scroll'
    // }
});



function AddFrinendComponent(props) {
    const { classes } = props;
    const currentUserId = localStorage.getItem('ID')
    let allUsers = props.getAllUsers;
    console.log(allUsers)
    //  const AllUsers = [];
    // console.log(AllUsers)
    // for (let data of allUsers) {
    //     // const users = allUsers[key];
    //     console.log(data)
    //     // if (data.uid !== currentUserId) {
    //     //     AllUsers.push(data)
    //     // };
    // }
    const AllUsers = allUsers.filter((item)=>{
        console.log(item)
        return (item.uid !== currentUserId)})
    console.log(AllUsers)
    return (
            // <div>
        <div style={{height:"86%",overflowY:"auto"}}>
        {/* <div style={{maxHeight:"87%",overflowY:"auto"}}> */}
            {AllUsers.map(user => {
                console.log({user});
                return (
                <div className={classes.inline}>
                    <div className={classes.nameDiv}>
                        <Typography className={classes.userName}>{user.userName}</Typography>
                        {/* <Button>{user.userName}</Button> */}
                        {/* <p>{user.userName}</p> */}
                    </div>
                    <div className={classes.btnDiv} >
                        {/* <Button className={classes.btn}>Add Friend</Button> */}
                        <button onClick={() => { props.gotoAddFriend(user.uid, user.userName) }}>Add Friend</button>
                    </div>
                </div>
            )})}
        </div>
    )
}
export default withStyles(styles)(AddFrinendComponent)