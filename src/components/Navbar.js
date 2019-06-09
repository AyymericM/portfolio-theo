import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/media/logo.svg'
import { navbar } from '../styles'

export default class Navbar extends Component {
    render() {
        return (
            <navbar.container>
                <Link to={'/'}>
                    <navbar.logo src={logo}/>
                </Link>
                <navbar.menuitems>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                </navbar.menuitems>
            </navbar.container>
        )
    }
}