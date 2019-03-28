import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../FirebaseConfig';

const styles = {
    root: {
      flexGrow: 1,
    },
    SignInForm: {
      margin : '10px',
    },
  };
 

class SignInForm extends Component{
    constructor(){
        super();
        this.state = ({
            email : '',
            password : '',
        })
    }

    nameHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
      }

      signInClickHandler = (event) => {
          this.props.gotoSignIn(this.state.email, this.state.password)

      }

    render(){
        const { classes } =this.props;
        return(
            <div className={classes.SignInForm}>
            <h1><i> Login your account </i></h1>
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
                {/* Email : 
                <input type="text" className='field' name='email' placeholder='Enter Email' onChange={this.nameHandler} />
                Password : 
                <input type="password" className='field' name='password' placeholder='Enter Password' onChange={this.nameHandler} /> */}
           <Button 
                type='Button' 
                onClick={this.signInClickHandler}
                variant="contained" 
                color="primary" 
                className={classes.button}>
                SignIn
                </Button>
            </div>
        )
    }
}
export default withStyles(styles)(SignInForm);


