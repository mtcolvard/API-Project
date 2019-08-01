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
    console.log(e.value)
  }

  componentDidMount() {
    // const array = [37.8267,-122.4233, 40.7127,-74.0059]

    const citiesToFetch = [
      { name: 'Los Angeles', lat: 37.8267, long: -122.4233 },
      { name: 'New York', lat: 40.7127, long: -74.0059 },
      { name: 'London', lat: 51.507351, long: -0.127758 },
      { name: 'Dubai', lat: 25.204849, long: 55.270782}


    ]

    citiesToFetch.forEach(city => {
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/47fe293fb5087a343396299f31f740ec/${city.lat},${city.long}`)
        .then(res => this.setState({cities: this.state.cities.concat(res.data)}))

    })

    // for (let i = 0; i < array.length; i = i + 2){
    //   axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/47fe293fb5087a343396299f31f740ec/${array[i]},${array[i+1]}`)
    //     .then(res => this.setState({cities: this.state.cities.concat(res.data)}))





    // axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/47fe293fb5087a343396299f31f740ec/${array[2]},${array[3]}`)
    //   .then(res => this.setState({city: res.data}))
  }
  // fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/47fe293fb5087a343396299f31f740ec/${array[0]},${array[1]}`)
  //     .then(res => res.json())
  //     .then(data => this.setState({city: data}))
  // }

  // componentDidMount() {
  //   fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/47fe293fb5087a343396299f31f740ec/37.8267,-122.4233')
  //     .then(res => res.json())
  //     .then(data => this.setState({city: data}))
  // }





  render() {
    if(!this.state.cities) return <h2>just a second</h2>
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div>
              <form>
                <input
                  className="input"
                  name="longitude"
                  placeholder="45.834"
                  onChange={this.handleSubmit}
                />
                <input
                  className="input"
                  name="latitude"
                  placeholder="45.834"
                  onChange={this.handleSubmit}

                />
                <button className="button is-primary">Submit</button>
              </form>

            </div>
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
