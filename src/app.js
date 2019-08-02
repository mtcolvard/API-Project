import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter, Route, Switch} from 'react-router-dom'

import CitiesIndex from './components/cities/Index'
import Hero from './components/common/Hero'
// import Header from './components/common/Header'
import './style.scss'
// import 'bulma'
// import axios from 'axios'

// import { HashRouter, Route } from 'react-router-dom'

// import Card from './components/Card'

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
