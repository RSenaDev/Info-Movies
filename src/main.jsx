import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//importing pages
import App from './App.jsx'
import Home from './Home.jsx'
import Movie from './Movie.jsx'
import Search from './Seacrh.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element = {<App/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='movie/:id' element = {<Movie/>}/>
      <Route path='search' element = {<Search/>} />
      </Route>
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
