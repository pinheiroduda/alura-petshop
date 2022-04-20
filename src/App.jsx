import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'

import './assets/css/base/base.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
