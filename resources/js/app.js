require('./bootstrap');

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
    render () {
        return (
        <BrowserRouter>
            <div>
                Hello Humans
            </div>
        </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
