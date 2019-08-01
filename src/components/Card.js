import React from 'react'


const Card = (props) => {
  const localTime = props.time

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{props.timezone}</div>
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
        <p>Temperature: {props.temperature}</p>
      </div>
      <div className="card-content">
        <p>Apparent Temperature: {props.apparentTemperature}</p>
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
