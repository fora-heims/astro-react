import './Main.css'
import ZodiacCard from '../ZodiacCard/ZodiacCard.js'
import { zodiac } from '../zodiac.js'

import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <main>
        {zodiac.map((sign) => (
          <ZodiacCard key={sign.name} {...sign} />
        ))}
      </main>
    )
  }
}
