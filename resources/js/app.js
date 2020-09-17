require('./bootstrap');

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div id="home">
                    <Header />

                    <Switch>
                        <Route name="home" exact path='/' component={Home} />
                    </Switch>

                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
