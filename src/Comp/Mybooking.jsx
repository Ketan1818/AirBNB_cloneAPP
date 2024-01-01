// ReservationList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/mybooking.css'
const Mybooking = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('/reservations');
        setReservations(response.data); // Assuming the response contains an array of reservations
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  const handleDelete=(id)=>{
    axios.delete("http://localhost:3001/cancelreservation/"+id)
    .then(res => {console.log(res)
    window.location.reload()}
    )
    .catch(err => console.log(err))
}

  return (
    <>
   
    <div className='main-booking'>
      {/* <div>My Booking</div> */}
      <ul className=''>
      <div>My Booking</div>
        {reservations.map((reservation) => (
          <nav key={reservation._id} className='nav-div'>
            <div><img src={reservation.image} alt="" className='reserve-img'/></div>
           
           <div>
            <h3>Property Title :{reservation.propertyTitle}</h3>
            <p>Price : {reservation.price}</p>
           <p>Name : {reservation.name}</p>
<p>CheckIn : {reservation.checkin}</p>
<p>ChechOut : {reservation.checkout}</p>
<p>Guest : {reservation.guest}</p>
      

           </div>
          
            
            
          </nav>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Mybooking;
