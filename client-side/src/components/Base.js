import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Register from '../view/Register'
import Login from '../view/Login'
import Chat from '../view/Chat'
import Home from '../view/Home'
import Navigation from './helper/Navigation'

export default function Base() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/chats" component={Chat} />
      </Switch>
    </Router>
  )
}