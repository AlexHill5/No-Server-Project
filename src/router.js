import React from 'react'
import {Switch, Route} from 'react-router-dom'


import Home from './Components/Home/Home';
import About from "./Components/About/About";

export default (
    <Switch>
        <Route component={ Home } path='/' exact/>
        <Route component={ About } path='/about'/>
    </Switch>
)