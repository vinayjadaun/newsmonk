import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar.jsx'
import News from './components/News/News'
  import React, { Component } from 'react'
import Footer from './components/Footer/Footer'
import {Routes,Route} from "react-router-dom"
import Entertainment from './components/entertainment/entertainment'
import Health from './components/Health/Health'
import Sports from './components/Sports/Sports'
import General from './components/General/General'
import Business from './components/Business/Business'
import About from './components/About/About'

  
  export default class App extends Component {
    render() {
      return (
        <div>
          
         <Navbar/>
         <Routes>
         <Route path="/" element = {<News pageSize={8} country ='in'category='general'/>}></Route>
         <Route path="/entertainment" element = {<Entertainment/>}></Route>
         <Route path="/about" element = {<About/>}></Route>
         <Route path="/Health" element = {<Health/>}></Route>
         <Route path="/Business" element = {<Business/>}></Route>
         <Route path="/Sports" element = {<Sports/>}></Route>
         <Route path="/General" element = {<General/>}></Route>

         </Routes>
         <Footer/>
        
        </div>
      )
    }
  }
   