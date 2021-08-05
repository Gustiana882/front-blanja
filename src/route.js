import  { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login/login.jsx';
import Home from './views/Home/Home.jsx'
import Detail from './views/Detail/detail.jsx'
import Bag from './views/Bag/Bag.jsx';
import Dashboard from './views/Dashboard/Dashboard.jsx'
import Profile from './views/Dashboard/Profile/Profile.jsx'
import MyProduct from './views/Dashboard/MyProduct/MyProduct.jsx'
import Inventory from './views/Dashboard/Inventory/Inventory.jsx'

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/detail/:items" component={Detail}></Route>
                    <Route exact path="/bag" component={Bag}></Route>
                    <Route exact path="/dashboard" component={Dashboard}></Route>

                    <Route exact path="/profile" component={Profile}></Route>
                    <Route exact path="/my-product" component={MyProduct}></Route>
                    <Route exact path="/inventory" component={Inventory}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routing;
