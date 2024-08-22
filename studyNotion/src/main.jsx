import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom/client'
import {Toaster} from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

const root = ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
);
