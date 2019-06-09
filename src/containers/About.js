import React, { Component } from 'react'
import { Navbar, Footer } from 'components'
import { containers } from 'styles'

export default class About extends Component {
    render() {
        return (
            <containers.main>
                <Navbar />
                <Footer />
            </containers.main>
        )
    }
}