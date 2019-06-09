import React, { Component } from 'react'
import { cards } from '../styles'

export default class Navbar extends Component {
    render() {
        return (
            <cards.container>
                <cards.thumb src={this.props.data.thumb} />
                <cards.texts>
                    <cards.cat>{this.props.data.cat}</cards.cat>
                    <cards.title>{this.props.data.title}</cards.title>
                </cards.texts>
            </cards.container>
        )
    }
}