import React,{useState,useEffect} from 'react';
import "./Login.css"
import {Typography,Button} from "@mui/material"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../Actions/User.js"
import { useAlert } from 'react-alert';



const Login = () => {

//Intializing email and password state
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const alert = useAlert()
  const {error} = useSelector((state) => state.user);
  const {message} = useSelector((state) => state.like);
//to prevent the page from Loading
    const loginHandler = (e) =>{
        e.preventDefault()

//Dispatching User from Actions          
      dispatch(loginUser(email,password)); 
    };

   
    
    useEffect(() => {
      if(error){
        alert.error(error)
        dispatch({type:"clearErrors"}) 
      }
      if(message){
        alert.success(error)
        dispatch({type:"clearMessage"}) 
      }
    
      
    },[alert,error,dispatch,message])
    

  return (
    <div className="login">

        <form className="loginForm" onSubmit={loginHandler}>

        <Typography variant="h3" style={{padding:"2vmax"}}>Social Media App</Typography>
        

        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" required  value={password} onChange={(e) => setPassword(e.target.value)}/>

      <Link to="/forgot/password">
      <Typography>Forgot Password?</Typography>
      </Link>


      <Button type="Submit">Login</Button>


     <Link to="/register">
     <Typography>New User?</Typography>
     </Link>


        </form>
    </div>
  )
}

export default Login