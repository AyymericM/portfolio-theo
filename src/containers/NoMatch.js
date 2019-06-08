
import React, { Component } from 'react'
import { Navbar } from '../components'
import { containers } from '../styles'

export default class Home extends Component {
    render() {
        return (
            <containers.main>
                <Navbar />
                <h1>404</h1>
            </containers.main>
        )
    }
}