import React, { Component } from 'react'
import Navbar from './Navbar'
import Signup from './Signup'
import '../components/Signuppagestyle.css'

export default class  extends Component {
    render() {
        return (
            <div className = "pageSign">
               <Navbar/>
               <Signup/> 
            </div>
        )
    }
}
