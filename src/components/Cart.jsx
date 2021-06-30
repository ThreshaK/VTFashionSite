import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router';
import firebase from 'firebase/app';
import "./Cartstyle.css"
import Getcart from './Getcart';
import { db } from '..';

export default function Cart({user}) {
    

    const {docs} = Getcart("cart",{user});
    const [quen,setquen]=useState(1);
    

    function Decrease(id) {
        db.collection('cart').doc(id).update("qt", firebase.firestore.FieldValue.increment(-1))
        
    }

    function Increase(id) {
        db.collection('cart').doc(id).update("qt", firebase.firestore.FieldValue.increment(1))
        
    }

    function  deleteItem(id) {
        db.collection("cart").doc(id).delete();
        
    }

    function total() {
        let x = 0.00;
        docs.map(doc =>{
            x =x+ doc.price*doc.qt;
        })
           
        return x;
    }
    
       return (
        <div className = "cart" align= "center">
            <h1>Cart</h1>

            <table id = "cartTable">
                <thead>
                <tr>
                    <th >#</th>
                    <th >Name</th>
                    <th >Price</th>
                    <th >Quantity</th>
                    <th>Total</th>
                    <th >Remove</th>
                </tr>
                </thead>
             
        
                {docs && docs.map (doc => (
            
                
                    <tbody>
                    <tr key = {doc.id}>
                        <td >{doc.id}</td>
                        <td >{doc.Name}</td>
                        <td >{`Rs .${doc.price}`}</td>
                        <td ><button className = "decrease" onClick = {() =>Decrease(doc.id)}>-</button > {doc.qt} <button  className = "increase" onClick={() =>Increase(doc.id)}>+</button></td>
                        <td>{`Rs .${doc.price*doc.qt}`}</td>
                        <td className= " rem" ><button onClick={() =>deleteItem(doc.id)} className = "btnRemove">Remove</button></td>

                    </tr>
                    </tbody>
                ))} 

            <tr><td colSpan = "5">Sub Total : {total()}</td></tr>
            </table>

            {!docs && <div className = "empty">Your cart is empty</div>}


           

         </div>
    );

    
}