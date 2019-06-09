import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { footer } from 'styles'

export default class Navbar extends Component {
    render() {
        return (
            <footer.container>
                <h1>A project in mind ? Let’s work <span>together</span> 😁</h1>
                <a href='mailto:theojullien@live.fr'>theojullien@live.fr</a>
                <footer.bottom>
                    <p>© 2019 Théo Jullien. Coded by <a href="https://aymericm.fr/" target="_blank">Aymeric Moehn</a></p>
                    <footer.links>
                        <a href="https://aymericm.fr/" target="_blank">Instagram</a>
                        <a href="https://aymericm.fr/" target="_blank">Dribble</a>
                        <a href="https://aymericm.fr/" target="_blank">Linkedin</a>
                    </footer.links>
                </footer.bottom>
            </footer.container>
        )
    }
}