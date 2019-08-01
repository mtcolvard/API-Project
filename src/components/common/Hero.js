import React from 'react'

class Hero extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Weather Friends
            </h1>
            <h2 className="subtitle">
              A place to take the weather.
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
