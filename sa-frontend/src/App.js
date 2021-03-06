import React, { Component } from "react";
import { Route, Switch} from 'react-router';
import Home from './components/Home';
import TestWebApp from "./components/TestWebApp";
import TestLogicApp from "./components/TestLogicApp";
import ErrorPage from "./components/ErrorPage";

import "./App.css";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route path='/testwebapp' component={ TestWebApp } />
                <Route path='/testlogicapp' component={ TestLogicApp } />
                <Route path="" component={ ErrorPage } />
            </Switch>
        );
    }
}
export default App;
