import React, { Component } from 'react'
import Cart from './Cart'
import Navbar from './Navbar'



export default function Cartpage ({user}) {
   
    return (
        <div className ="homepage">
            <Navbar user = {user}/>
            <Cart user = {user} />
            
        </div>
    )

}
