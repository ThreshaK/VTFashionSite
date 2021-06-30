import React, { Component } from 'react';
import "./Boxstyle.css";
import firebase from 'firebase/app';
import { db } from '..';

export default function Box(props) {
    const name = props.title;
    const img = props.imge;
    const priceP = props.price;
    const description = props.des;
    const Id = props.id;
    const custName = props.user;
    const quantity =1;
  

    function addProd() {
        const user = firebase.auth().currentUser;
        if(!user){
            alert("Please log into the system");

        }
        else{
            db.collection("cart").doc(Id).set({
                Name : name,
                price : priceP,
                pdId : Id,
                qt : quantity
            }).then(()=>{
                alert(`${name} add to cart`);
            }

            )

        }
       
    }
   
        return (
            <div className = "box" align= "center"key = {Id}>
                <h1>{name}</h1>
                <img src = {img}/>
                <h6>{`Rs .${priceP}`}</h6>
                <p>{description}</p>
                <button onClick={() => addProd()}>Add to cart</button>

             </div>
        );
    
}

