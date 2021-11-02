


import React from 'react'

import { Route,} from "react-router-dom"
import Abuot from './components/Abuot'
import cards from './components/cards'
import Home from './components/Home'
import contact from './components/contact'
import Nav from './components/nav'
import Carid from './components/Carid'
import "./App.css"

 


 const App = ()=> {
  
    return (
     
      <div>
         <Nav/>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact/" component={contact} />
        <Route exact path="/cards/" component={cards} />
        <Route exact path="/Abuot/" component={Abuot} />
        <Route exact path="/Carid/:id" component={Carid} />
      </div>
    )
  
}
export default App