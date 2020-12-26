import React, { Component } from 'react';
import { Route, Link } from 'react-router'

import Users from './containers/Users'
import asyncComponent from './hoc/asyncComponent'

const asyncPizza = asyncComponent(() => {
    return import('./containers/Pizza')
})

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/pizza">Pizza</Link>
                    <Link to="/">Users</Link>
                </div>
                <div>
                    <Route path="/pizza" component={asyncPizza}/>
                    <Route path="/" exact component={Users}/>
                </div>
            </div>
        );
    }
}

export default App;