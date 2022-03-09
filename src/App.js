import React from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardComponent from './components/Card'
import Home from './components/Home'
import Design from './components/Design'
import About from './components/About'
import Image from 'react-bootstrap/Image'
import dummyImage from './components/opel-g774241110_1920.jpg'


import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom'

// const App = () => {
//   return (  
//      <div className='App'>
//        <Navbar/>
//        <Home/>
//        <Image src={dummyImage} fluid />
//        <About/> 
       
//      </div> 
//   );
// }
const App = () => {
  return (
    
    <Router>
      <Navbar/>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/Design' element={< Design />}></Route>
          <Route exact path='/About' element={< About />}></Route>
        </Routes>
      </div>
      <Image src={dummyImage} fluid />
    </Router>

  )
}

export default App

