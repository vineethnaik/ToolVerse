import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import VideoIntro from './components/VideoIntro'
import './App.css'

function App() {
  return (
    <Router>
      <VideoIntro />
      <AppRoutes />
    </Router>
  )
}

export default App
