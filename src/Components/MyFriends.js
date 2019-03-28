import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Chip from '@material-ui/core/Chip';


const styles = {
    div : {
        border : '1px solid black',
        height : '40px',
        
    }

}

function MyFriendsComponent (props) {
    const { classes } = props;
    console.log("Hello" + props.getMyAllFriends)
    let MyAllFrinends = props.getMyAllFriends;
    console.log(MyAllFrinends);
    let NowMyAllFriends = []
    for (let key in MyAllFrinends){
        const MyAllFrinendsData = MyAllFrinends[key]
        console.log(MyAllFrinendsData)
        console.log(MyAllFrinendsData.addFriendUserName)
        NowMyAllFriends.push(MyAllFrinendsData )
    }

        return(
            <div>
                {NowMyAllFriends.map(myFriends => (
                    <div onClick={props.showChat} className={classes.div}>{myFriends.addFriendUserName}</div>
                    ))}
            </div>
            // <div>
            // <Chip label={myFriends.addFriendUserName} className={classes.chip} variant="outlined" />
            //       <Chip label="Hello" className={classes.chip} variant="outlined" >{}</Chip>
            // </div>
        )
    }
export default withStyles (styles)(MyFriendsComponent)
