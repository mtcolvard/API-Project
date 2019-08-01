import React from 'react'


const Card = (props) => {

  let cityName = props.timezone
  cityName = /\/(.+)/.exec(cityName)[1].replace(/_/, ' ')

  const localUnixTime = new Date(props.time*1000)
  const localTime = localUnixTime.toLocaleTimeString()
  const temperatureCelcius = ((props.temperature-32)*5/9).toFixed(0)
  const apparentTemperatureCelcius = ((props.apparentTemperature-32)*5/9).toFixed(0)



  return (
    <div className="card">
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
