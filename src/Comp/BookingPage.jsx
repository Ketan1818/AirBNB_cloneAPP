

import { useParams } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';
import '../style/bokingpage.css';
import house1 from "../Assets/house1.jpg";
import house2 from "../Assets/house2.jpg";
import house3 from "../Assets/house3.jpg";
import house4 from "../Assets/house4.jpg";
import house5 from "../Assets/house5.jpg";

const propertyData = {
    "Mumbai": {
        title: "Mumbai",
        price: "10,000",
        description: "Beautiful property in Mumbai.",
        image: house1
    },
    "Delhi": {
        title: "Delhi",
        price: "8,500",
        description: "Cozy property in Delhi.",
        image: house2
    },
    "Bangalore": {
      title: "Bangalore",
      price: "11,500",
      description: "Beautiful rental property in Bangalore.",
      image: house3
    },
    "Hyderabad": {
      title: "Hyderabad",
      price: "11,500",
      description: "Beautiful rental property in Hyderabad.",
      image: house4
    },
    "Pune": {
      title: "Pune",
      price: "11,500",
      description: "Beautiful rental property in Pune.",
      image: house5 
    }
    // Add more properties as needed
};

const BookingPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [checkin, setCheackin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [city, setCity] = useState("");
    const [guest, setGueist] = useState("");

    const { title } = useParams();
    const property = propertyData[title];

    if (!property) {
        return <div>Property not found</div>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
          // Get the token from cookies

            const response = await axios.post('/reservations', {
                name,
                email,
                number,
                checkin,
                checkout,
                city,
                guest,
                propertyTitle: property.title,
                image: property.image,
                price: property.price,
                
            },{
              withCredentials: true,
              headers:{
                'Authorization': `Bearer ${token}` // Include the token in the Authorization header
              }
            });

            console.log(response.data.message);
            alert("Reservation successfully created!");
        } catch (error) {
            alert("Failed to create reservation. Please try again later.");
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="booking-details-container">
            <h2>Booking Details for {property.title}</h2>
            <img src={property.image} alt={property.title} className="IMGS" />
            <h2>Price: {property.price}</h2>
            <p>Description: {property.description}</p>

            <form action="" onSubmit={handleSubmit}>

            <div className="inputSection">
          <h2 className="Signup">Reserve</h2>
          
          <input type="text" id="name" className="inputText" required value={name} onChange={ev=> setName(ev.target.value)} placeholder="Name" />
          <span className="focus-border"></span>
        </div> 

        <div className="inputSection">
          <input type="email" id="Email" className="inputText" required placeholder="Email" value={email} onChange={ev=>setEmail(ev.target.value)} />
          <span className="focus-border"></span>
        </div>

        <div className="inputSection">
          <input type="number" id="Phone" className="inputText" required placeholder="Phone Number" value={number} onChange={ev=>setNumber(ev.target.value)} />
          <span className="focus-border"></span>
        </div>
          
        <div className=''>
                        <h3 className='c-h3'>Check in time</h3>
                        <input type="date" value={checkin} onChange={ev=>setCheackin(ev.target.value)} placeholder='14'/>
                    </div>
                    <nav>
                        <h3 className='c-h3'>Check out time</h3>
                        <input type="date" value={checkout} onChange={ev=>setCheckout(ev.target.value)} placeholder='11'/>
                    </nav>
        
        
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
          <label htmlFor="city">Guest</label>
          <select name="city" id="city" value={guest} onChange={ev=>setGueist(ev.target.value)} >
            <option>Choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            
          </select>
        </div>
                {/* Your form fields */}
                {/* ... */}
                <button className="reserve" type="submit">Reserve</button>
            </form>
        </div>
    );
};

export default BookingPage;
