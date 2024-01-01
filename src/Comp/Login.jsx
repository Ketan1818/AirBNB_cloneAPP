import React from "react";
//import './Login.css'; // Assuming you have a CSS file named Login.css for styling
import "../style/Login.css";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import { useContext } from "react";
const LoginForm = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [redirect ,setRedirect]=useState(false);
  const {setUser} = useContext(UserContext);

async function handleLoginSubmit(ev){
  ev.preventDefault();
  try {
     const data=await  axios.post("/login",{email,password});
    setUser(data);
    alert("login successful")
    setRedirect(true);
  } catch (error) {
    
    alert("login failed");
   

  }

}

     if(redirect){
      return <Navigate to={"/"}/>
     }

     
  return (
    <div className="container">
      <section id="LoginForm" className="sectionForm reSize">
        <form id="Register" action="#" onSubmit={handleLoginSubmit}>
          <div className="inputSection">
            <h1 className="log">LOGIN</h1>
            <input
              type="email"
              id="L-Username"
              className="inputText"
              required
              placeholder="Email"
              value={email} onChange={ev=>setEmail(ev.target.value)}
            />
          </div>

          <div className="inputSection">
            <input
              type="password"
              id="L-Password"
              className="inputText"
              required
              placeholder="Password"
              value={password} onChange={ev=>setPassword(ev.target.value)}
            />
            <br />
            <br />
          </div>

          <div>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>

          <div className="formFooter">
            <button className="submitButton" type="submit" id="SubmitForm">
              Login
            </button>
          </div>
          <div className="optionalSection">
          <span className="sizeBack">No account yet?</span>
         <Link to={"/register"} >Register</Link>
        </div>
        </form>

        {/* <div className="optionalSection">
          <span className="sizeBack">No account yet?</span>
         <Link to={"/register"} >Register</Link>
        </div> */}

        <div className="boxShadow"></div>
      </section>
    </div>
  );
};

export default LoginForm;
