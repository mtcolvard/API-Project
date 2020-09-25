import React from 'react'
// const images = ['https://i.imgur.com/TALhwVW.png']

const Card = (props) => {

  let cityName = props.timezone
  cityName = /\/(.+)/.exec(cityName)[1].replace(/_/, ' ')
  const humidity = props.humidity * 100
  const temperatureCelcius = ((props.temperature-32)*5/9).toFixed(0)
  const apparentTemperatureCelcius = ((props.apparentTemperature-32)*5/9).toFixed(0)
  const chanceOfRain = props.precipProbability * 100
  // const localUnixTime = new Date(props.time*1000)
  // const localTime = localUnixTime.toLocaleTimeString()

  // const imgAddress = './images/'
  // const partly-cloudy-day = 'https://svgur.com/i/EP3.svg'
  // <figure className="image" style={{ backgroundImage: `url(${imgAddress}${props.icon}.svg)`}}>

  // let imgscv = 'https://svgur.com/i/EP3.svg'
  const allWeather = {
    'clear-day': 'https://svgur.com/i/EMy.svg',
    'clear-night': 'https://svgur.com/i/ENY.svg',
    'cloudy': 'https://svgur.com/i/EPH.svg',
    'fog': 'https://svgur.com/i/EPJ.svg',
    'partly-cloudy-day': 'https://svgur.com/i/EN9.svg',
    'partly-cloudy-night': 'https://svgur.com/i/EP3.svg',
    'rain': 'https://svgur.com/i/EQF.svg',
    'sleet': 'https://svgur.com/i/EPj.svg',
    'snow': 'https://svgur.com/i/ENP.svg',
    'wind': 'https://svgur.com/i/EMz.svg'
  }
  const weatherAnimation = {
    'clear-day': '',
    'clear-night': '',
    'cloudy': '',
    'fog': '',
    'partly-cloudy-day': '',
    'partly-cloudy-night': '',
    'rain': '',
    'sleet': '',
    'snow': '',
    'wind': ''
  }
  // ALTERNATE SETTINGS FOR INCLUDING ANIMATION
  // const weatherAnimation = {
  //   'clear-day': '',
  //   'clear-night': '',
  //   'cloudy': 'animated fadeOutUp 1 forwards',
  //   'fog': 'animated fadeOut 1 forwards',
  //   'partly-cloudy-day': '',
  //   'partly-cloudy-night': '',
  //   'rain': 'animated flash 1 forwards',
  //   'sleet': 'animated flash 1 forwards',
  //   'snow': 'animated bounce 1 forwards',
  //   'wind': 'animated wobble 1 forwards'
  // }

  allWeather[props.icon]
  weatherAnimation[props.icon]

  // <div className="card-content">
  // <p>Local Time: {localTime}</p>
  // </div>
  // imgscv = props.icon

  // const imgsvg = 'https://svgur.com/i/EP3.svg'
  // <figure className="image" style={{ backgroundImage: `url(${props.icon})`}}>
  // </figure>

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{cityName}</div>
      </div>
      <div className="card-content card-summary">
        <p>{props.summary}</p>
      </div>
      <div className="card-content card-icons">
        <figure className={`image ${weatherAnimation[props.icon]}`} style={{ backgroundImage: `url("${allWeather[props.icon]}")`}}/>
      </div>
      <div className="card-content">
        <p>Feels Like: {apparentTemperatureCelcius}°C</p>
      </div>
      <div className="card-content">
        <p>Chance of Rain: {chanceOfRain}%</p>
      </div>
      <hr/>
      <div className="card-content">
        <p>Temperature: {temperatureCelcius}°C</p>
      </div>
      <div className="card-content">
        <p>Humidity: {humidity}%</p>
      </div>
      <div className="card-content">
        <p>Wind Speed: {props.windSpeed} km/h</p>
      </div>
      <div className="card-content">
        <p>UV Index: {props.uvIndex}</p>
      </div>
    </div>
  )
}

export default Card
