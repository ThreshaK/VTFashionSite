import React, { Component } from 'react'
import Box from './Box'
import Frock from '../Images/frock1.jpg'
import Blouse from '../Images/blouse.jpg'
import Shoes from '../Images/shoes.jpg'
import Trouser from '../Images/trouser.jpg'
import Bag from '../Images/bag.jpg'
import "../components/Mainnstyle.css"
import Navbar from './Navbar';
export default function Main ({user}) {
    
        return (
            <div className =" vp">
                 <Navbar user = {user}/>
                <Box user = {user} id = "1" title = "Frock" price = " 1200.00" des = "cotton" imge = {Frock} />
                <Box user = {user} id = "2" title = "Blouse" price = "900.00" des = "cotton" imge = {Blouse}/>
                <Box user = {user} id = "3" title = "Shoes" price = "2400.00" des = "cotton" imge = {Shoes}/>
                <Box user = {user} id = "4" title = "Trouser" price = "13500.00" des = "cotton" imge = {Trouser}/>
                <Box  user = {user}id = "4" title = "Trouser" price = "13500.00" des = "cotton" imge = {Trouser}/>
                <Box user = {user} id = "5" title = "Bag" price = "1000.00" des = "cotton" imge = {Bag}/>
                <Box user = {user} id = "6" title = "Bag" price = "1000.00" des = "cotton" imge = {Bag}/>
                <Box user = {user} id = "7" title = "Bag" price = "1000.00" des = "cotton" imge = {Bag}/>
            </div>
        )
    
}
