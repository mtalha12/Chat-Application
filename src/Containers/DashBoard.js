import React, { Component } from "react";
import * as firebase from 'firebase';
import AddFriendComponent from '../Components/AddFriend';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MyFriendsComponent from '../Components/MyFriends';
import InputComponent from '../Components/Input';


const styles = theme => ({
    root: {
      flexGrow: 1,
      // height:'100vh',
  
    },
    container:{
      height:'100vh',
      // border:'3px solid black'
    },
    item:{
  
    },
    paper: {
      // padding: theme.spacing.unit * 1,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '100%',
    },
    chat : {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '88%',
    }
  });   

class DashBoardComponent extends Component {
    constructor(){
        super();
        this.state = {
            allUsersIDArr : '',
            MyAllFriendsArr : '',
            message : '',
        }
    }
    componentDidMount = () =>{
        this.getAllUsers();
        this.getMyAllFriends();
    }
    getAllUsers = () =>{
        firebase.database().ref('users').once('value')
        .then((snapshot)=>{
            const allUsersID = snapshot.val()
            console.table(allUsersID); 
            let allUsersIDArr = [];
            for (let key in allUsersID){
                const a = allUsersID[key];
                // a.key= key //Har Object Ki Object Ke Andar 1 Key Create Kardega.
                console.log(a);
                console.log(a.userName);
                allUsersIDArr.push(a)
            }
            this.setState({allUsersIDArr})
            console.log(allUsersIDArr.userName)
        })
    }
    doAddFriend = (uid,userName) =>{
        const addFriendUserName = userName;
        console.log(addFriendUserName);
        const addFriendUID = uid;
        console.log('Add Friend Id ' + addFriendUID);
        const userID = localStorage.getItem('ID');
        console.log('User Id ' + userID);
        const obj = {
            addFriendUID,
            addFriendUserName,
            allSendMessages : '',
            allReceivedMessages : '',
        }
        firebase.database().ref('messages').child(userID).child('allFriends')
        .child(addFriendUID).set(obj)
        .then((resolve)=>{

        });
        this.getMyAllFriends();
       
    }
    getMyAllFriends = () =>{
        const userID = localStorage.getItem('ID');
        console.log('User Id ' + userID);
        firebase.database().ref('messages/'+ userID + '/allFriends').once('value')
        .then((snapshot)=>{
            const data = snapshot.val();
            console.log(data);
            const MyAllFriendsArr = [];
            for (let key in data){
                const MyAllFriends = data[key]
                MyAllFriendsArr.push(MyAllFriends)
            }
            this.setState({MyAllFriendsArr})
        })
    }
    doInputHandler = (event) =>{
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    doSendClickHandler = () =>{

    }
    
    render(){
        const { classes } = this.props;
        console.log(this.state.allUsersIDArr.userName)
        return(
            <div>
                 <div className={classes.root}>
      <Grid container direction="row"
        justify="center"
        alignItems="stretch"
        spacing={24}  
        className={classes.container}>
        <Grid item xs={3}  className={classes.item}>
          <Paper className={classes.paper}><h2>Your Friends</h2>
          <MyFriendsComponent
          getMyAllFriends={this.state.MyAllFriendsArr}
          />
          </Paper>
          
        </Grid>

        <Grid item xs={5}>
          <Paper className={classes.chat}><h2>Your Chat</h2>
          
          </Paper>
          <InputComponent
          goInputHandler={this.doInputHandler}
          goSendClickHandler={this.doSendClickHandler}
          />
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}><h2>All Users</h2>
          <AddFriendComponent 
               getAllUsers={this.state.allUsersIDArr}
               gotoAddFriend={this.doAddFriend}
           /> 
          </Paper>
        </Grid>
       
      </Grid>
    </div>
               {/* <AddFriendComponent 
               getAllUsers={this.state.allUsersIDArr}
               gotoAddFriend={this.doAddFriend}
               /> */}
            </div>
        )
    }
}
DashBoardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles) (DashBoardComponent)