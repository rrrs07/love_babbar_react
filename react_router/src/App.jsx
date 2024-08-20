import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Support from './components/Support'
import About from './components/About'
import Labs from './components/Labs'
import NotFound from './components/NotFound'
import { NavLink } from 'react-router-dom'
import MainHeader from './components/MainHeader'


import './App.css'

function App() {
  

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/support">Support</NavLink>
          </li>

          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>

          <li>
            <NavLink to="*">NotFound</NavLink>
          </li>
        </ul>
      </nav>



     <Routes>
        <Route path="/" element={<MainHeader />}>
        {/* index is used to make the home default page */}
          
          <Route index element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
     </Routes>
    </div>
  )
}

export default App
