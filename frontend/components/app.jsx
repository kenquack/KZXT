import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session_forms/login_form_container";
import SignUpFormContainer from "./session_forms/sign_up_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Home from "./home/home";
import Modal from "./modal/modal";
import SearchContainer from './products/search_container';
import Slideshow from './nav_bar/slide_bar';
import ProductShowContainer from './products/product_show_container';
import CartItemContainer from "./cart_items/cart_item_container";

const App = () => (
    <div>
        <Modal />
        <Slideshow />
        <NavBarContainer />
        
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path='/products/:id' component={ProductShowContainer} />
            <Route exact path="/products" component={SearchContainer} />
            <Route exact path='/cart_items' component={CartItemContainer} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;