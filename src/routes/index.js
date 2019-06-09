import React, { Component } from 'react'
import { Home, About, NoMatch } from '../containers'
import { Switch, Route } from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (  
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={NoMatch} />
            </Switch>
        )
    }
}