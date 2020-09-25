import React from 'react'
// const images = ['https://i.imgur.com/TALhwVW.png']

const Card = (props) => {

  let cityName = props.timezone
  cityName = /\/(.+)/.exec(cityName)[1].replace(/_/, ' ')
  const humidity = props.humidity * 100


  // const localUnixTime = new Date(props.time*1000)
  // const localTime = localUnixTime.toLocaleTimeString()

  // switch ()
  const temperatureCelcius = ((props.temperature-32)*5/9).toFixed(0)
  const apparentTemperatureCelcius = ((props.apparentTemperature-32)*5/9).toFixed(0)
  const chanceOfRain = props.precipProbability * 100


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
<<<<<<< HEAD
    'clear-day': '',
    'clear-night': '',
    'cloudy': 'animated fadeOutUp infinite',
    'fog': 'animated fadeOut infinite',
    'partly-cloudy-day': '',
    'partly-cloudy-night': '',
    'rain': 'animated flash infinite',
    'sleet': 'animated flash infinite',
    'snow': 'animated bounce infinite',
    'wind': 'animated wobble infinite'
=======
    'clear-day': 'animated shake infinite',
    'clear-night': 'animated shake infinite',
    'cloudy': 'animated shake infinite',
    'fog': 'animated shake infinite',
    'partly-cloudy-day': 'animated shake infinite',
    'partly-cloudy-night': 'animated shake infinite',
    'rain': 'animated shake infinite',
    'sleet': 'animated shake infinite',
    'snow': 'animated shake infinite',
    'wind': 'animated shake infinite'
>>>>>>> upstream/master
  }



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
      <div className="card-content">
        <figure className={`image ${weatherAnimation[props.icon]}`} style={{ backgroundImage: `url("${allWeather[props.icon]}")`}}/>
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
        <p>Humidity: {humidity}%</p>
      </div>
      <div className="card-content">
        <p>Chance of Rain: {chanceOfRain}%</p>
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
