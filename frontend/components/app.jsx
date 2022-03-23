import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session_forms/login_form_container";
import SignUpFormContainer from "./session_forms/sign_up_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Home from "./home/home";
import Modal from "./modal/modal";
import ProductIndex from '../components/products/product_index';
import SearchContainer from './products/search_container'

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        
        <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/products" component={SearchContainer} />
        <Route path="/" component={Home} />
        </Switch>
    </div>
);

export default App;