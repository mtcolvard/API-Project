import React from 'react'
// import ReactDom from 'react-dom'
import axios from 'axios'

import Card from './Card'





class CitiesIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      cities: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(e){
    e.preventDefault()
  }

  componentDidMount() {


    const citiesToFetch = [
      { name: 'Los Angeles', lat: 37.8267, long: -122.4233 },
      { name: 'New York', lat: 40.7127, long: -74.0059 },
      { name: 'London', lat: 51.507351, long: -0.127758 },
      { name: 'Dubai', lat: 25.204849, long: 55.270782},
      { name: 'Bangkok', lat: 13.756331, long: 100.501762}
      // { name: , lat: , long:}


    ]

    citiesToFetch.forEach(city => {
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/47fe293fb5087a343396299f31f740ec/${city.lat},${city.long}`)
        .then(res => this.setState({cities: this.state.cities.concat(res.data)}))

    })
  }


  render() {

    if(!this.state.cities) return <h2>just a second</h2>
    return (
      <section className="section">
        <div className="container">
          <div className="header">

            {this.state.cities.map(city =>
              <div key={city.latitude}>

                <Card

                  timezone={city.timezone}
                  time={city.currently.time}
                  summary={city.currently.summary}
                  temperature={city.currently.temperature}
                  icon={city.currently.icon}
                  humidity={city.currently.humidity}
                  precipProbability={city.currently.precipProbability}
                  apparentTemperature={city.currently.apparentTemperature}
                  windSpeed={city.currently.windSpeed}
                  uvIndex={city.currently.uvIndex}

                />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default CitiesIndex
