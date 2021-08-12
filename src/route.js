import  { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login/login.jsx';
import Home from './views/Home/Home.jsx'
import Detail from './views/Detail/detail.jsx'
import Bag from './views/Bag/Bag.jsx';
import ProfileUser from './views/Dashboard/ProfileUser/ProfileUser'
import ProfileStore from './views/Dashboard/ProfileStore/ProfileStore'
import MyProduct from './views/Dashboard/MyProduct/MyProduct.jsx'
import Inventory from './views/Dashboard/Inventory/Inventory.jsx'
import SignUp from './views/Signup/Signup'
import ViewProduct from './views/ViewProduct/ViewProduct.jsx';

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/sign-up" component={SignUp}></Route>
                    <Route exact path="/bag" component={Bag}></Route>
                    <Route exact path="/profile-user" component={ProfileUser}></Route>
                    <Route exact path="/profile-store" component={ProfileStore}></Route>
                    <Route exact path="/my-product" component={MyProduct}></Route>
                    <Route exact path="/inventory" component={Inventory}></Route>
                    <Route exact path="/search" component={ViewProduct}></Route>
                    <Route exact path="/filter" component={ViewProduct}></Route>
                    <Route exact path="/detail/:items" component={Detail}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routing;
