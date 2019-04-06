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
            console.log(result);
            const UserUID = result.user.uid;
            localStorage.setItem('ID' , UserUID);
            this.props.history.push('/dashBoard');
            alert("SignIn Success");
            firebase.database().ref('users').child(UserUID).once('value')
            .then((snapshot)=>{
                const currentUser = snapshot.val();
                console.log(currentUser)
                console.log(currentUser.userName);
                const UserName = currentUser.userName;
                localStorage.setItem('USERNAME' , UserName);
            }).catch((error)=>{
                console.log(error)
            })
        })
        .catch((error)=>{
            console.log(error);
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