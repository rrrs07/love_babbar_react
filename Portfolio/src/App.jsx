import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Resume from './components/resume/Resume'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Header />
      <Home />
      <Skills />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
