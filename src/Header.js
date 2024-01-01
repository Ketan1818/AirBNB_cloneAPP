import { Link } from "react-router-dom";
import Menu from "./Assets/menu.png";
import Profile from "./Assets/profile.png";
import './style/styles.css'
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

import React from "react";




export default function Header(){
  const {user} = useContext(UserContext);
 
 

  // const handleSearch = (event) => {
  //   const term = event.target.value;
  //   setSearchTerm(term);
  //   const filteredResults = cities.filter(city =>
  //     city.toLowerCase().includes(term.toLowerCase())
  //   );
  //   setFilteredCities(filteredResults);
  // };
  // const handleSearch = (event) => {
  //   const term = event.target.value;
  //   setSearchTerm(term);
  // };

  // const handleSubmit = (city) => {
  //   history.push(`/${city.toLowerCase()}`);
  // };

  return(
    <div className="header">
    <Link to={"/"}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
        className="logo"
        alt="airbnblogo"
      />
    </Link>
    {/* <ul className="list">
      <li>Home</li>
      <li>About</li>
      <li>Info</li>
    </ul>  */}
     {/* <div className="searchbar">
        <div>AnyWhere</div>
        <div className="space-line"></div>
        <div>Any week</div>
        <div className="space-line"></div>
        <div>Add guests</div>
        <div className="space-line"></div>
        <button className="btn1"> 
     <img src={SearIcon} className="" alt="" />
        </button>
    </div> */}
     {/* <nav className="searchbar">
      <input 
        type="text" 
        placeholder="Search city..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />
      <ul>
        {filteredCities.map(city => (
          <li key={city}>{city}</li>
        ))}
                {cities.map(city => (
          <li key={city} onClick={() => handleSubmit(city)}>{city}</li>
        ))}

      </ul>
    </nav> */}

    <Link to={user?"/account":"/Login"} className="right">
      <img src={Menu} className="left-bar" alt="logo" />

      <img src={Profile} className="left-bar" alt="" />
      
      {!!user && (
        <div>
          {user.name}
        </div>
      )}
      {/* You can add more elements here */}
    </Link>
   
  </div>
     
  );
}