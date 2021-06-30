import React, { Component } from 'react'
import '../components/Navbarstyle.css'
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import {useHistory} from 'react-router-dom';
import { db } from '..';

import Getcart from './Getcart';


export default function Navbar ({user}) {

    const history = useHistory();
    const {docs} = Getcart("cart",{user});
   

    const logout = () => {
        firebase.auth().signOut()
        .then(
            ()=>{
                
                {
                    docs && docs.forEach(doc =>{
                        db.collection("cart").doc(doc.id).delete();
                    }

                        )
                }
                history.push("/login")
            }
        )
    }
   
   
        return (
            <div className="navbar" style = {{display:'flex'}}>
                
                <div className= "navbarcontiner">

                        {!user && <ul className="navbaritem" style = {{display:'flex'}}>
                            <li><Link to = "/home" className='nav-links'>Home</Link></li>
                            <li><Link to = "/login"className='nav-links'>Login</Link></li>
                            <li><Link to = "/signup"className='nav-links'>Signup</Link></li>
                            <li><Link to = "/shop"className='nav-links'>Shop</Link></li>
                        </ul>}

                        {user && <ul className="navbaritem" style = {{display:'flex'}}>
                            <li><Link to = "/home" className='nav-links'>{user}</Link></li>
                            <li><Link to = "/shop"className='nav-links'>Shop</Link></li>
                            <li><Link to = "/cart" className= 'nav-links'>Cart</Link></li>
                            <li><button className ="logoutbtn" onClick={logout}>LOGOUT</button> </li>
                        </ul>}


                    
                </div>    
            </div>
        )
    
}
