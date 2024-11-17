import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import "bootstrap/dist/css/bootstrap.min.css";


import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/App.scss";
import "./styles/home.scss";
import "./styles/About.scss";
import "./styles/Services.scss";
import "./styles/Contact.scss";
import Policy from './components/Policy'
import Error from './components/Error'
import GoToTop from './components/GoToTop'

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>          
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/policy' element={<Policy/>}/>  
          <Route path='*' element={<Error/>}/>        
        </Routes>
        <GoToTop/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App