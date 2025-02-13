import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

// create data storage
export const DataContext = createContext();

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    // axios convert json data to js object
    axios.get('https://gitconnected.com/v1/portfolio/riandec')
      .then(res => setData(res.data))
  }, [])

  return (
    // pass data to all components, no need to pass though props
    <DataContext.Provider value={data}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </DataContext.Provider>
  )
}

export default App
