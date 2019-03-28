import React from "react";
import {
    BrowserRouter as Router,
    Route,
    //Link,
  } from 'react-router-dom';
  import AuthenticationComponent from "./Containers/Authentication";
  import SignInAuthenticationComponent from "./Containers/SignInAuthentication";
  import DashBoardComponent from "./Containers/DashBoard";
  import HomeComponent from "./Components/Home";


  let CustomRoutes =() => (
    <Router>
        <div>
            <Route exact path='/home' component={HomeComponent} />
            <Route exact path='/' component={AuthenticationComponent}  />
            <Route exact path='/signIn' component={SignInAuthenticationComponent} />
            <Route exact path='/dashBoard' component={DashBoardComponent} />
        </div>
    </Router>
  );

  export default CustomRoutes   