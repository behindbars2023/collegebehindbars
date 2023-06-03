import {BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import Home from './components/Home'
import AboutCollege from './components/AboutCollege'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop>
        <Routes>
          <Route index element={<Home /> } />
          <Route path='/about-college' element={<AboutCollege /> } />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
