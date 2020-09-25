import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter, Route, Switch} from 'react-router-dom'

import CitiesIndex from './components/cities/Index'
import './style.scss'
import 'animate.css'


// import Hero from './components/common/Hero'
// import Card from './components/Card'
// import Header from './components/common/Header'
// import axios from 'axios'


class App extends React.Component {

  // <Hero />

  render() {
    return(
      <HashRouter>
        <Switch>
          <Route path="/" component={CitiesIndex} />
        </Switch>
      </HashRouter>
    )
  }
}


ReactDom.render(
  <App />,
  document.getElementById('root')
)
