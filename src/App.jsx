import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'

function App() {
  
  return (
    <div className="app">
      <h1>Quiz game</h1>
      <Card />
    </div>
  )
}

export default App
