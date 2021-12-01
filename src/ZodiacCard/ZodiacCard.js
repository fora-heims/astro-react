import './ZodiacCard.css'

import React, { Component } from 'react'

export default class ZodiacCard extends Component {
  render() {
    return (
      <div className="zodiac-card">
        <img
          alt={this.props.name}
          src={`${process.env.PUBLIC_URL}/zodiac/${this.props.name}.png`}
        />
        <span className="name">{this.props.name}</span>
        <span className="dates">{this.props.dates}</span>
      </div>
    )
  }
}
