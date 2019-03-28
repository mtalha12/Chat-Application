import React, { Component } from "react";
import SignUpForm from "../Components/SignUp";
import * as firebase from 'firebase';
import "../FirebaseConfig";


class AuthenticationComponent extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    doSignUp = (firstName,lastName,userName,email,password,repeatPassword) =>{
        console.log(firstName,lastName,userName,email,password,repeatPassword);
        if(repeatPassword !== password){
            alert('Repeated password is uncorrect');
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((data)=>{
                console.log(data.user.uid);
                const obj = {
                    uid : data.user.uid,
                    firstName,
                    lastName,
                    userName,
                    email
                }
                firebase.database().ref('users').child(data.user.uid).set(obj)
                .then((resolve)=>{
                    this.props.history.push('/signIn')
                    alert("SignUp Success");
                })
            })
            .catch((error)=>{
                alert(error);
                //Handle Error here;
                // var errorCode = error.code;
                // var errorMessage = error.message;
            })
        }
    }
    render(){
        return(
            <div>
                <SignUpForm
                gotoSignUp={this.doSignUp}
                />
            </div>
        )
    }
}
export default AuthenticationComponent