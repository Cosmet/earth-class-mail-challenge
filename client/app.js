import React, { Component } from 'react'

import { Navbar } from './components'
import Routes from './routes'
import particleConfig from './particles.js'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    particlesJS('particles-js', particleConfig);
  }

  render() {
    return (
      <div id='particles-js'>
        <div id='angled-container'>
          <Navbar />
          <Routes />
        </div>
      </div>
    )
  }
}

export default App
