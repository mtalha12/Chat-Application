import React, { Component } from "react";
import * as firebase from 'firebase';
import AddFriendComponent from '../Components/AddFriend';
import PropTypes, { array } from 'prop-types';
import ScrollToBottom, { scrollToBottom } from 'react-scroll-to-bottom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MyFriendsComponent from '../Components/MyFriends';
import InputComponent from '../Components/Input';
import ShowChatComponent from '../Components/ShowChat'
import AppBarComponent from '../Components/NavBar';


const styles = theme => ({
  root: {
    flexGrow: 1,
    // height:'100vh',

  },
  container: {
    height: '90vh',
    // border:'3px solid black'
  },
  paper: {
    // padding: theme.spacing.unit * 1,
    border: '1px solid black',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '87%',
  },
});

class DashBoardComponent extends Component {
  constructor() {
    super();
    this.state = {
      allUsersIDArr: '',
      AllUsersIDArrButNotMyFriend: [],
      MyAllFriendsArr: '',
      chat: '',
    }
    // this.messagesEnd = null;
  }
  componentDidMount = () => {
    this.getAllUsers();
    this.getMyAllFriends();
  }
  //.on("value", (snapshot) => {
//    const chats = snapshot.val();
  getAllUsers = () => {
    firebase.database().ref('users').once('value')
      .then((snapshot) => {
        const currentUserID = localStorage.getItem('ID');
        const allUsersID = snapshot.val()
        console.log(allUsersID);
        let allUsersIDArr = [];
        console.log(allUsersIDArr)
        for (let key in allUsersID) {
          const a = allUsersID[key];
          //a.key= key   //Har Object Ki Object Ke Andar 1 Key Create Kardega.
          console.log(a);
          console.log(a.userName);
          allUsersIDArr.push(a);
        }
        //[2,3,4,10,3049, 10, 10]
        // breaks when condition true
        //const a = array.some((value, index)=> value === 10);// returns only true false
        //const obj = array.find((value, index)=> value === 10);// returns index value if condition true else return null
       
        
      // not break
        //const a = array.filter((value, index)=> value === 10);
//        [10,10,10]// always returns array

// for(let i =0; i< 10;i++){
//   console.log("log for i", i)
//   for(let j=0; j<10;j++){
//     console.log('log for j', j) 
//   }
// }
// const data = array1.filter((x)=> !array2.some((y)=>y.id ===x.id))


        //   //New Logic { get my friends}
          firebase.database().ref('friends/' + currentUserID).once('value')
        .then((snapshot)=>{
          const myFriends = snapshot.val()
          // let AllUsersIDArrButNotMyFriend = [];
          let myallfriendsIdArr = [];
          for (let key in myFriends){
            const b = myFriends[key];
            myallfriendsIdArr.push(b)
          }
          let usersButNotFriend =  allUsersIDArr.filter((user)=> !myallfriendsIdArr.some((friend)=>friend.addFriendId === user.uid))
          console.log(usersButNotFriend)
          // AllUsersIDArrButNotMyFriend.push(usersButNotFriend)
          this.setState({AllUsersIDArrButNotMyFriend: usersButNotFriend})        
        })
        // this.setState({ allUsersIDArr })
        // console.log(allUsersIDArr.userName)
      })
  }
  doAddFriend = (uid, userName) => {
    const addFriendUserName = userName;
    const addFriendId = uid;
    const currentUserId = localStorage.getItem('ID');
    firebase.database().ref('friends/' + addFriendId).child(currentUserId)
      .once('value')
      .then((snapshot) => {
        const obj = snapshot.val()
        console.log(obj)
        const obj1 = {
          addFriendId,
          addFriendUserName,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
        }
        if (obj && Object.keys(obj).length > 0 && obj.chatId) {
          obj1['chatId'] = obj.chatId // obj['chatId']
        } else {
          obj1['chatId'] = firebase.database().ref().push().key
        }
        firebase.database().ref('friends/').child(currentUserId).child(addFriendId).set(obj1)
          .then((resolve) => {

          });
      })

    this.getMyAllFriends();
  }

  getMyAllFriends = () => {
    const currentUserId = localStorage.getItem('ID');
    //console.log('CurrentUser Id ' + currentUserID);
    firebase.database().ref('friends/' + currentUserId).once('value')
      .then((snapshot) => {
        const data = snapshot.val();
        console.log(data);
        const MyAllFriendsArr = [];
        for (let key in data) {
          const MyAllFriends = data[key]
          MyAllFriendsArr.push(MyAllFriends)
        }
        this.setState({ MyAllFriendsArr })
      })
  }
  goestoShowChat = (myFriend) => {
    console.log(myFriend);
    //const nowFriendId = myFriend.addFriendId;
    const nowFriendChatId = myFriend.chatId;
    // const currentUserID = localStorage.getItem('ID');
    // console.log(currentUserID + 'Hello');
    this.setState({
      selectedFriend: myFriend
    })
    firebase.database().ref('chats/' + nowFriendChatId).on("value", (snapshot) => {
      const chats = snapshot.val();
      this.setState({
        chat: chats
      })
    })
  }

  doSendClickHandler = (msg) => {
    console.log(msg);
    const nowFriendId = this.state.selectedFriend.addFriendId;
    const nowFriendChatId = this.state.selectedFriend.chatId;
    const nowFriendUserName = this.state.selectedFriend.addFriendUserName;
    const currentUserId = localStorage.getItem('ID');
    const currentUserName = localStorage.getItem('USERNAME');

    firebase.database().ref('chats/' + nowFriendChatId)
      .push({
        senderId: currentUserId,
        senderName: currentUserName,
        receiverId: nowFriendId,
        receiverName: nowFriendUserName,
        text: msg,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        read: false
      });
  }


  render() {

    const { classes } = this.props;
    return (
      <div className={classes.mainDive}>
        <div className={classes.root}>
        <AppBarComponent {...this.props} />
          <Grid container direction="row"
            justify="center"
            alignItems="stretch"
            spacing={24}
            className={classes.container}>
            <Grid item xs={3} className={classes.item}>
              <Paper className={classes.paper}><h2>Your Friends</h2>
                <MyFriendsComponent
                  getMyAllFriends={this.state.MyAllFriendsArr}
                  gotoShowChat={this.goestoShowChat}
                />
              </Paper>

            </Grid>
            <Grid item xs={5}>
              {/* <ScrollToBottom className={classes.Scroll}>
                <Paper
                  className={classes.chat} >
                  <h2>Your Chat</h2><hr /> */}
              <ShowChatComponent
                showSelectedFriendAllChat={this.state.chat}
              />
              {/* </Paper>
              </ScrollToBottom> */}
              <InputComponent
                gotoSendClickHandler={this.doSendClickHandler}
              />
            </Grid>

            <Grid item xs={3}>
              <Paper className={classes.paper}><h2>All Users</h2>
                <AddFriendComponent
                  getAllUsers={this.state.AllUsersIDArrButNotMyFriend}                gotoAddFriend={this.doAddFriend}
                />
              </Paper>
            </Grid>

          </Grid>
        </div>
      </div>
    )
  }
}
DashBoardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DashBoardComponent)