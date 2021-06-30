import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../components/Homestyle.css'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="topName">
                    <h1>WOMEN'S & MEN'S</h1>
                </div>
                <div className="shopName">
                    Welcome to VIT Fashions hrida
                </div>
               
                    <button className="viewbtn"><Link  to ='/shop' className= "vibtn">View Collection</Link></button>
              
                
            </div>
        )
    }
}
