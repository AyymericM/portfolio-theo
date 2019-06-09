import React, { Component } from 'react'
import { footer } from 'styles'

export default class Navbar extends Component {
    render() {
        return (
            <footer.container>
                <h1>A project in mind ? Let’s work <span>together</span> 😁</h1>
                <a href='mailto:theojullien@live.fr'>theojullien@live.fr</a>
                <footer.bottom>
                    <p>© 2019 Théo Jullien. Coded by <a href="https://aymericm.fr/" target="_blank" rel="noopener noreferrer">Aymeric Moehn</a></p>
                    <footer.links>
                        <a href="https://www.instagram.com/t_juju_/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://dribbble.com/TheoJullien" target="_blank" rel="noopener noreferrer">Dribble</a>
                        <a href="https://www.linkedin.com/in/th%C3%A9o-j-b47326a4/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </footer.links>
                </footer.bottom>
            </footer.container>
        )
    }
}