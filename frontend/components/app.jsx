import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session_forms/login_form_container";
import SignUpFormContainer from "./session_forms/sign_up_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Home from "./home/home";

const App = () => (
    <div>
        
        <NavBarContainer />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route component={Home} />
    </div>
);

export default App;