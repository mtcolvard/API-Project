import React from 'react'
// const images = ['https://i.imgur.com/TALhwVW.png']

const Card = (props) => {

  let cityName = props.timezone
  cityName = /\/(.+)/.exec(cityName)[1].replace(/_/, ' ')

  const localUnixTime = new Date(props.time*1000)
  const localTime = localUnixTime.toLocaleTimeString()
  const temperatureCelcius = ((props.temperature-32)*5/9).toFixed(0)
  const apparentTemperatureCelcius = ((props.apparentTemperature-32)*5/9).toFixed(0)
  // const imgAddress = '~/development/API-Project/src/components/cities/images/'
  // const partly-cloudy-day = 'https://svgur.com/i/EP3.svg'
  // <figure className="image" style={{ backgroundImage: `url(${imgAddress}${props.icon}.svg)`}}>

  // let imgscv = 'https://svgur.com/i/EP3.svg'


  // imgscv = props.icon

  // const imgsvg = 'https://svgur.com/i/EP3.svg'
  // <figure className="image" style={{ backgroundImage: `url(${props.icon})`}}>
  // </figure>

  return (
    <div className="card columns is-one-fifth">
      <div className="card-header">
        <div className="card-header-title">{cityName}</div>
      </div>
      <div className="card-content">
        <p>{props.icon}</p>
      </div>
      <div className="card-content">
        <p>Local Time: {localTime}</p>
      </div>
      <div className="card-content">
        <p>{props.summary}</p>
      </div>
      <div className="card-content">
        <p>Temperature: {temperatureCelcius}°C</p>
      </div>
      <div className="card-content">
        <p>Apparent Temperature: {apparentTemperatureCelcius}°C</p>
      </div>
      <div className="card-content">
        <p>Humidity: {props.humidity}</p>
      </div>
      <div className="card-content">
        <p>Chance of Rain: {props.precipProbability}</p>
      </div>
      <div className="card-content">
        <p>Wind Speed: {props.windSpeed}</p>
      </div>
      <div className="card-content">
        <p>UV Index: {props.uvIndex}</p>
      </div>


    </div>
  )
}

export default Card
