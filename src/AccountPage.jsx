
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './style/account.css'
import axios from "axios";
import PlacesPage from "./Comp/PlacesPage";

export default function AccountPage() {
  const [redirect,setRedirect]=useState(null);
  const { ready, user ,setUser} = useContext(UserContext);

  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }


    async function logout(){
  await axios.post("/logout");
  setRedirect("/");
  setUser(null);
  
}

if (!ready) {
  return "Loading....";
}

  if (ready && !user  && !redirect) {
    return <Navigate to="/Login" />;
  }


// function linkClasses(type=null){
//   return "py-2 px-6"
// }
if(redirect){
  return <Navigate to={redirect}/>
}

  return (
    <div>
      <nav className="acc-main">
        <Link to="/account"  className="link {{ type === 'subpage' || (typeof subpage === 'undefined' && type === 'profile') ? 'subpage' : '' }}"><img src="" alt="" /> My Profile</Link>
        <Link to="/my-reservations"  className="link {{ type === 'subpage' || (typeof subpage === 'undefined' && type === 'profile') ? 'subpage' : '' }}">My bookings</Link>
        {/* <Link to="/places" className="link {{ type === 'subpage' || (typeof subpage === 'undefined' && type === 'profile') ? 'subpage' : '' }}">My accommodations</Link> */}
      </nav>
      {subpage === "profile" && (
         <div className="logout">
          {/* <h3 className="logname">   logged {user.name} ({user.email})  </h3> */}
         
         <button className="log-btn" onClick={logout}>Logout</button>
        </div>
      )}
       
       {/* {subpage === "places" && (
        <PlacesPage/>
       )} */}
        {/* <PlacesPage/> */}
      
    </div>
  );
}
