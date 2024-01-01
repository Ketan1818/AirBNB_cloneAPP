import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Signup.css'; // Assuming you have a CSS file named Signup.css for styling
import '../style/signup.css'
import axios from "axios";

function Registerpage() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setConfirmpassword]=useState("");
  const [number,setNumber]=useState("");
  const [address,setAddress]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [type,setType]=useState("");
  
  async function registerUser(ev){
  // ev.preventDefauilt();
  ev.preventDefault();
  try {
    await axios.post("/register",{
      name,email,password,confirmpassword,number,address,city,state,type
     },{ withCredentials: true });
     alert("Registeration succesfull. Now you can log in")
  } catch (error) {
    alert("Registration failed . Please try again later");
  }

}

  return (
    <div className="main">
      <form id="Register" action="#" onSubmit={registerUser} >
        <div className="inputSection">
          <h2 className="Signup">Register</h2>
          
          <input type="text" id="name" className="inputText" required value={name} onChange={ev=> setName(ev.target.value)} placeholder="Name" />
          <span className="focus-border"></span>
        </div> 

        <div className="inputSection">
          <input type="email" id="Email" className="inputText" required placeholder="Email" value={email} onChange={ev=>setEmail(ev.target.value)} />
          <span className="focus-border"></span>
        </div>

        <div className="inputSection">
          <input type="password" id="Password" className="inputText" required placeholder="Password" value={password} onChange={ev=>setPassword(ev.target.value)} />
          <span className="focus-border"></span>
        </div>

        <div className="inputSection">
          <input
            type="password"
            id="C-Password"
            className="inputText"
            required
            placeholder="Confirm Password"
            value={confirmpassword} onChange={ev=>setConfirmpassword(ev.target.value)}
          /><br/><br/>
          <span className="focus-border"></span>
        </div>

        <div className="inputSection">
          <input type="number" id="Phone" className="inputText" required placeholder="Phone Number" value={number} onChange={ev=>setNumber(ev.target.value)} />
          <span className="focus-border"></span>
        </div>

        <div className="inputSection">
          <input type="text" id="Address" className="inputText" required placeholder="Address" value={address} onChange={ev=>setAddress(ev.target.value)} />
          <span className="focus-border"></span>
        </div>

        <div className="inputSection">
          <label htmlFor="city">Choose City</label>
          <select name="city" id="city" value={city} onChange={ev=>setCity(ev.target.value)} >
            <option>Choose</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="chennai">Chennai</option>
            <option value="bangalore">Bangalore</option>
            <option value="hyderabad">Hyderabad</option>
          </select>
        </div>

        <div className="inputSection">
          <input type="text" id="State" className="inputText" required placeholder="State" value={state} onChange={ev=>setState(ev.target.value)} />
          <span className="focus-border"></span>
        </div>

        <div className="inputSec">
          <label htmlFor="account">Choose Account Type</label>
          <select name="cars" id="cars" value={type} onChange={ev=>setType(ev.target.value)}>
            <option>Choose</option>
            <option value="Tourist">Tourist</option>
            <option value="Owner">Owner</option>
          </select>
          <br/>

          <div className="formFooter">
            <button className="inputText-BTN">Register</button>
          </div>

          <div className="FOOTER">
            <span className="input sizeBack">Already have an account?</span>
            <Link to={"/Login"} >Login</Link>
          </div>
        </div>
      
      </form>

      
    </div>
  );
}

export default Registerpage;
