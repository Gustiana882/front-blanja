import  { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login/login.jsx';
import Home from './views/Home/Home.jsx'
import Detail from './views/Detail/detail.jsx'
import Bag from './views/Bag/Bag.jsx';
import Profile from './views/Profile/Profile.jsx'

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/detail/:items" component={Detail}></Route>
                    <Route exact path="/bag" component={Bag}></Route>
                    <Route exact path="/profile" component={Profile}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routing;
