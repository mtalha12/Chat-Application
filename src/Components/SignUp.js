import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../FirebaseConfig';

const styles = {
  root: {
    flexGrow: 1,
  },
  SignUpForm: {
    margin : '10px',
  
  },
};



class SignUpForm extends Component {
    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            userName: '',
            email:'',
            password:'',
            repeatPassword:'',
        }
    }

    nameHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
      }
    checkInput(){
        return!(this.state.firstName.length && this.state.lastName.length)
      }
    
    signUpClickHandler = (event) =>{
        this.props.gotoSignUp(this.state.firstName,this.state.lastName,
        this.state.userName,this.state.email,this.state.password,
        this.state.repeatPassword);
    }

    render(){
            const { classes } = this.props;
        return(
            <div className={classes.SignUpForm} >
            <h1><i>Create a new account</i></h1>
      <TextField
      onChange={this.nameHandler}
         id="firstName"
         name="firstName"
         label="First Name"
         className={classes.textField}
         type="text"
         autoComplete="current-password"
         margin="normal"
         placeholder="Please Enter"
         />
         <br />
      <TextField
      onChange={this.nameHandler}
         id="lastName"
         name="lastName"
         label="Last Name"
         className={classes.textField}
         type="text"
         autoComplete="current-password"
         margin="normal"
         placeholder="Please Enter"
         />
         <br />
         <TextField
      onChange={this.nameHandler}
         id="userName"
         name="userName"
         label="user Name"
         className={classes.textField}
         type="text"
         autoComplete="current-password"
         margin="normal"
         placeholder="Please Enter"
         />
         <br />
      <TextField
      onChange={this.nameHandler}
         id="email"
         name="email"
         label="Email"
         className={classes.textField}
         type="text"
         autoComplete="current-password"
         margin="normal"
         placeholder="Please Enter"
         />
         <br />
      <TextField
      onChange={this.nameHandler}
         id="password"
         name="password"
         label="Password"
         className={classes.textField}
         type="password"
         autoComplete="current-password"
         margin="normal"
         placeholder="Please Enter"
         />
         <br />
          <TextField
          onChange={this.nameHandler}
         id="repeatPassword"
         name="repeatPassword"
         label="Repeat Password"
         className={classes.textField}
         type="password"
         autoComplete="current-password"
         margin="normal"
         placeholder="Please Enter"
         />
         <br />
         <br />
         <Button 
          disabled={this.checkInput()}
          type='submit' 
          onClick={this.signUpClickHandler}
          variant="contained" 
          color="primary" 
          className={classes.button}>
          Sign Up
          </Button>
         </div>
        )
    }
}
export default withStyles(styles)(SignUpForm)