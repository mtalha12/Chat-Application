import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Chip from '@material-ui/core/Chip';
import { first } from "glamor";


const styles = {
    div : {
        border : '1px solid black',
        height : '40px',
        
    }

}

function MyFriendsComponent (props) {
    const { classes } = props;
    let MyAllFrinends = props.getMyAllFriends;
    let NowMyAllFriends = []
    for (let key in MyAllFrinends){
        const MyAllFrinendsData = MyAllFrinends[key]
        console.log(MyAllFrinendsData)
        NowMyAllFriends.push(MyAllFrinendsData )
        console.log(NowMyAllFriends)

        // const lastSenderFriend = NowMyAllFriends;
        // const senderOrderTime = lastSenderFriend.sort((first,second) => first.timestamp > second.timestamp ? 1 : -1);
        // console.table(senderOrderTime)
    }
    
    // let checksendLastmessage = ()=>{
    //     const lastSenderFriend = NowMyAllFriends;
    //     console.log()
    //     // const order = inventors.sort((firstPerson,secondPerson) => firstPerson.year > secondPerson.year ? 1 : -1);
    // // console.table(order);
    //     const senderOrderTime = lastSenderFriend.sort((first,second) => first.timestamp > second.timestamp ? 1 : -1);
    //     console.table(senderOrderTime)
    // }
    
        return( 
            // <div>
            <div style={{height:"86%",overflowY:"auto"}}>
            {/* <div style={{maxHeight:"87%",overflowY:"auto"}}> */}
                {NowMyAllFriends.map(myFriends => (
                    <div onClick={()=>{props.gotoShowChat(myFriends)}} className={classes.div}>{myFriends.addFriendUserName}</div>
                    ))}
            </div>
            // <div>
            // <Chip label={myFriends.addFriendUserName} className={classes.chip} variant="outlined" />
            //       <Chip label="Hello" className={classes.chip} variant="outlined" >{}</Chip>
            // </div>
        )
    }
export default withStyles (styles)(MyFriendsComponent)
