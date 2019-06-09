import React, { Component } from 'react'
import { Navbar, Card } from 'components'
import { containers } from 'styles'
import content from 'content'

export default class Home extends Component {
    render() {
        return (
            <containers.main>
                <Navbar />
                <containers.header>
                    <h1>Hey, I’m Théo Jullien.</h1>
                    <h1>A French Creative Designer based on <span>St Michel sur Orge.</span> 🐮🌽</h1>
                    <p>Scroll down</p>
                </containers.header>
                <containers.cardslist>
                    {content.map(data => {
                        return <Card key={data.id} data={data} />
                    })}
                </containers.cardslist>
            </containers.main>
        )
    }
}