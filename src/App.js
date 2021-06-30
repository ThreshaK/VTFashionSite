
import './App.css';
import Main from './components/Main';
import React, {Component, useState } from 'react'
import Login from './components/Login';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore'
import Signupage from './components/Signupage';
import Homepage from './components/Homepage';
import { db } from '.';
import Cartpage from './components/Cartpage';


class App extends Component {

  state={
    user : null
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        db.collection("user").doc(user.uid).get()
        .then(snapshot=>{
          this.setState({
            user:snapshot.data().name
          })
        })
      }else{
        this.setState({
          user:null
        })
      }
    })
  }
 
  
render(){
 return (
    
      
      <Router>
        <Switch>
         
            <Route path = '/login' component={Login}/>
            <Route  path= '/shop'  component={() => <Main user = {this.state.user}/>}/>
            <Route  path= '/signup'  component={Signupage}/>
            <Route path='/cart' component={()=> <Cartpage user={this.state.user}/>}/>
            <Route path= '/'  component={()=> <Homepage user = {this.state.user}/>}/>
           
        </Switch>
      </Router>
     
   
  );
}
}

export default App;
