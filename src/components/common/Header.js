import React from 'react'
import axios from 'axios'


class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      formData: {},
      chosenCity: {},
      something: ''
      // errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleChange(e) {
    const formData = {...this.state.formData, [e.target.location]: e.target.value }
    // const errors = {...this.state.errors, [e.target.location]: '' }
    this.setState({ formData })
  }

  handleKeyUp(e) {
    this.setState({ something: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const inputCity = ''
    console.log(this.state.something)


    axios.get(`http://open.mapquestapi.com/geocoding/v1/address?key=jmvP4hFN8eC2OTcMqAcY8yghQdY1a4rO&location=${this.state.something}`)
      .then(res => this.setState({chosenCity: res.data.results[0].locations[0].displayLatLng }))
  }

  // {this.state.errors.tastingNotes !==this.state.errors.password && <small className="help is-danger">{this.state.errors.tastingNotes}</small>}

  // onKetUp={this.handleSubmit}
//
  render() {
    // console.log(this.state.chosenCity)
    console.log(this.state.chosenCity.lat)
    console.log(this.state.chosenCity.lng)

    return(
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">City Name</label>
              <div className="control">
                <input
                  className="input navbar-item"

                  name="cityName"
                  placeholder="New York or Baghdad"
                  onKeyUp={this.handleKeyUp}
                />
              </div>
            </div>
            <button className="button is-primary" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </section>    )
  }
}

export default Header
