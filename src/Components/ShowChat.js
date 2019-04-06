import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import ScrollToBottom, { scrollToBottom } from 'react-scroll-to-bottom';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '90%',
    display : 'flex',
    flexDirection : 'column',
    backgroundColor: theme.palette.background.paper,
    //border: "1px solid yellow",
  },
  inline: {
    display: 'inline',
  },
  li: {
    border: '2px solid black',
    width: '100%',
    height: '100%',
    borderRadius: '25px',
    maxWidth: 360,
    margin: '5px'
  },
  paper: {
    // padding: theme.spacing.unit * 1,
    border: '1px solid black',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: '50%',
  },
  chat: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '1px solid black',
    height: 'calc(85vh - 67px)',
    // overflowY:'scroll'
  },
  Scroll: {
    // height: '86%',
    height: 'calc(85vh - 67px)',

  }
});


function ShowChatComponent(props) {
  const { classes } = props;
  const currentUserName = localStorage.getItem("USERNAME");
  const currentuserId = localStorage.getItem("ID");
  const allChat = props.showSelectedFriendAllChat
  let AllChatNowFriend = []
  for (let key in allChat) {
    const AllChatNowFriendData = allChat[key]
    AllChatNowFriend.push(AllChatNowFriendData)
    console.log(AllChatNowFriend)

  }
  const dateHandler = (date) => {
    let Now = moment(date).format('MMMM Do YYYY, h:mm:ss a')
    console.log(Now)
    return Now

  }

  return (
    <Paper
    className={classes.chat} >
    <ScrollToBottom className={classes.Scroll}>
        <h2>Your Chat</h2><hr />


        <List className={classes.root} >
          {AllChatNowFriend.map(Chat => (

            <ListItem style={{ alignSelf: Chat.senderId === currentuserId ? "flex-end" : "flex-start" }}
              className={classes.li}
            >

              <ListItemText
                primary={Chat.senderName}
                secondary={
                  <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                      {Chat.text}
                    </Typography>
                    <br />
                    {dateHandler(Chat.timestamp)}
                  </React.Fragment>
                }
              />
            </ListItem>

          ))}
        </List>
     </ScrollToBottom>
      </Paper>

  )
}
export default withStyles(styles)(ShowChatComponent)



