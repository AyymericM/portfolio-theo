import React, { Component } from 'react'
import { Navbar, Card, Footer } from 'components'
import { containers } from 'styles'
import content from 'content'

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