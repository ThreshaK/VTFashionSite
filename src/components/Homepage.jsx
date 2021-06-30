import React, { Component } from 'react'
import Home from './Home'
import '../components/Homepagestyle.css'
import Navbar from './Navbar'

export default function Homepage ({user}) {
   
        return (
            <div className ="homepage">
                <Navbar user = {user}/>
                <Home/>
                
            </div>
        )
    
}
