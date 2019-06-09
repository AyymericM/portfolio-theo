import React, { Component } from 'react'
import { Navbar, Footer } from 'components'
import { containers, about } from 'styles'

export default class About extends Component {
    render() {
        return (
            <containers.main>
                <Navbar />
                <about.container>
                    <about.content hideOnSmall={true}>
                        <video src={require('assets/media/about.mp4')} autoPlay={true} muted={true} loop={true}></video>
                    </about.content>
                    <about.content>
                        <p>I am Théo Jullien, a 21 yo creative designer and student at <a href="http://hetic.net/" target="_blank">@Hetic.</a></p>
                        <p>I’m passionate about digital creation, working on interfaces, photo & video montages and logos.</p>
                        <p>Always available pour taper un foot sur le city <span role="img" aria-label="football">⚽</span></p>
                        <about.infos>
                            <a href="https://drive.google.com/file/d/1Si67pROJxG_vkZHsdLrJYgAIWK9_7LxL/view" target='_blank' rel="noopener noreferrer">
                                <about.btn>See my resumee</about.btn>
                            </a>
                            <about.infosText>
                                <about.infosTextRed>Current internship</about.infosTextRed>
                                <about.infosTextWhite>Mon petit gazon</about.infosTextWhite>
                            </about.infosText>
                        </about.infos>
                    </about.content>
                </about.container>
                <Footer />
            </containers.main>
        )
    }
}