import React, { Component } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import RickMorty from './components/RickMorty'

export default class App extends Component {



  render() {
    return (
      <>
        <Navbar />
        <RickMorty />
      </>

    )
  }
}
