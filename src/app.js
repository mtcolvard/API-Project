import React from 'react'
import ReactDom from 'react-dom'
import 'bulma'
// import axios from 'axios'

// import { HashRouter, Route } from 'react-router-dom'

import Card from './components/Card'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/47fe293fb5087a343396299f31f740ec/37.8267,-122.4233')
      .then(res => res.json())
      .then(data => this.setState({city: data}))
  }

  // axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/47fe293fb5087a343396299f31f740ec/37.8267,-122.4233')
  //   .then(res => this.setState({cities: res.data}))



  render() {
    if(!this.state.city) return <h2>just a second</h2>
    return (

      <div>

        <Card
          key={this.state.city.latitude}
          timezone={this.state.city.timezone}
          time={this.state.city.currently.time}
          summary={this.state.city.currently.summary}
          temperature={this.state.city.currently.temperature}
          icon={this.state.city.currently.icon}
          humidity={this.state.city.currently.humidity}
          precipProbability={this.state.city.currently.precipProbability}
          apparentTemperature={this.state.city.currently.apparentTemperature}
          windSpeed={this.state.city.currently.windSpeed}
          uvIndex={this.state.city.currently.uvIndex}

        />

      </div>

    )
  }


}

ReactDom.render(
  <App />,
  document.getElementById('root')
)
