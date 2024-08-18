import React, { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Resume from './components/resume/Resume'
import Project from './components/projects/Project'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Home />
      <Skills />
      <Project />
      {/* <Resume /> */}
    </div>
  )
}

export default App
