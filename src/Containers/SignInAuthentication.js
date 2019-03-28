import React, { Component } from "react";
import * as firebase from "firebase";
import '../FirebaseConfig';
import SignInForm from "../Components/SignIn";



class SignInAuthenticationComponent extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    doSignIn = (email,password) => {

        // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ...
        //   });
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((result)=>{
            const UserUID = result.user.uid;
            localStorage.setItem('ID' , UserUID);
            this.props.history.push('/dashBoard');
            alert("SignIn Success");
        })
        .catch((error)=>{
            alert(error);
        })
    }
    render(){
        return(
            <div>
                <SignInForm 
                gotoSignIn={this.doSignIn}                
                />
            </div>
        )
    }
}
export default SignInAuthenticationComponent