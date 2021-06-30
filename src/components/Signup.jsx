import React, {useState } from 'react'
import { useHistory } from 'react-router';
import "../components/Signupstyle.css"
import firebase from 'firebase/app';
import 'firebase/firestore'
import { db } from '..';



export default function Signup () {
   
        const[userName,setUserName]  = useState("");
        const[userEmail,setUserEmail]  = useState("");
        const[userPassword,setUserPassword]  = useState("");
        const[userCnPassword,setUserCnPassword]  = useState("");

        const[nameRe,setNameRe]  = useState(false);
        const[emailRe,setEmailRe]=useState(false);
        const[passwordRe,setPasswordRe]  = useState(false);
        const[cnPasswordRe,setCnPasswordRe]  = useState(false);
        const[userMessage , setUserMessage] = useState("");
        const history = useHistory();

        



         function clickHandler(){
             if(userName === undefined || userName === ''){
                 setNameRe(true);
                 setUserMessage("Name is required !");
             

             }else{setNameRe(false)}

             if(userEmail === undefined || userEmail === ''){
                setEmailRe(true);
                setUserMessage("Email is required !")
            }else{setEmailRe(false) }

            if(userPassword === undefined || userPassword === ''){
                setPasswordRe(true);
                setUserMessage("Password is required !")
            }else{setPasswordRe(false) }

            if(userCnPassword === undefined || userCnPassword === ''){
                setCnPasswordRe(true);
                setUserMessage("Confirm Password is required !")
            }else{setCnPasswordRe(false)}


            if (userPassword === userCnPassword){
                firebase.auth().createUserWithEmailAndPassword(userEmail,userPassword)
                    .then((cred) => {
                       
                        db.collection("user").doc(cred.user.uid).set({
                            email :  userEmail,
                            name : userName
                        })   .then(() => {
                               
                                setUserMessage("Registration success! Please Login to your account.")
                                history.push('/login')
                                
                            })
                            .catch((error) => {
                                let user = firebase.auth().currentUser;
                                if(user != null) {
                                    user.delete().then(
                                        x => {
                                           
                                        }
                                    )
                                }
                              
                                setUserMessage(error)
                              
                            });
                        
                    })
                    .catch((error) => {
                         let errorCode = error.code;
                         let errorMessage = error.message;
                        
                         setUserMessage(errorMessage)
                        
                    });
                
            }else{
                setUserMessage("Re Enter Confirm Password !!!")
            }


           

            
        }
    
     
        return (

            
            <div className = "signup" >

                <div className="head-sign">
                        Welcome to VT Fashions
                </div>
                <div className="box3">
                <h1>SIGN UP</h1><br></br>
                <small>{userMessage}</small>

                    <div className="sign-form">
                        <input type="text" onChange = {(e) => {setUserName(e.target.value)}} placeholder= "User Name" className={!nameRe ? "name" :  "dangerName"} />
                        <input type="email" onChange = {(e) => {setUserEmail(e.target.value)}} placeholder= "UserEmail" className={!emailRe ? "email" :  "dangerEmail"}  />
                        <input type="password" onChange = {(e) => {setUserPassword(e.target.value)}} placeholder= "Password" className={!passwordRe ? "password" :  "dangerpassword"}/>
                        <input type="password" onChange = {(e) => {setUserCnPassword(e.target.value)}} placeholder= " Confirm Password" className={!cnPasswordRe ? "cnpassword" :  "dangerCnPassword"} />
                        <button onClick={() => clickHandler()}  className="btnlog">Sign up</button> 
                    </div>
                </div>
                
            </div>
        )
    
}
