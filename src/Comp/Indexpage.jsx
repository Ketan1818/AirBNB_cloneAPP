
import React from "react";
import Rental from "../Rental.js";
import '../style/inde.css'
import Start from '../Assets/icons8-star-24.png'
import house1 from "../Assets/house1.jpg";
import house2 from "../Assets/house2.jpg";
import house3 from "../Assets/house3.jpg";
import house4 from "../Assets/house4.jpg";
import house5 from "../Assets/house5.jpg";
import prof1 from '../Assets/profil1.png';
import prof2 from '../Assets/profi3.png';
import prof3 from '../Assets/prof2.png';
import str from '../Assets/str.png';
import bgi from '../Assets/bgc.png';
import { Link } from "react-router-dom";

const rentals = [
  { title: "Mumbai", image: house1, price: "10,541" },
  { title: "Dehli", image: house2, price: "10,541" },
  { title: "Bangalore", image: house3, price: "10,541" },
  { title: "Hyderabad", image: house4, price: "10,541" },
  { title: "Pune", image: house5, price: "10,541" },
  { title: "Dehli", image: house1, price: "10,541" },
      
      { title: "Pune", image: house5, price: "10,541" },
      { title: "hyderabad", image: house2, price: "10,541" },
      { title: "Mumbai", image: house1, price: "10,541" },
  { title: "Dehli", image: house2, price: "10,541" },

      { title: "hyderabad", image: house2, price: "10,541" },
      { title: "Bangalore", image: house3, price: "10,541" },
      { title: "Pune", image: house5, price: "10,541" },
     
      { title: "Dehli", image: house2, price: "10,541" },
      { title: "Bangalore", image: house3, price: "10,541" },
      { title: "Hyderabad", image: house4, price: "10,541" },
];

const IndexPage = () => {
  return (
    <div className="py-3 sm:py-5">
       <div class="main-cont" >

<div class="left-cont">
   <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
   <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero nobis nisi cum suscipit perferendis animi temporibus eum vero ipsa amet nostrum in ipsam tempore hic asperiores exercitationem quod, deserunt a provident vel earum qui numquam eveniet. Consequatur, nam ad.
  </p>
  <Link to={'./my-reservations'}>
  <button class="btn1">My Booking</button>
  </Link>
</div>
<div class="right-cont">
   <img src={bgi} alt="" className="bgi"/>
</div>




</div>
<div class="box-main">
               <div class="box">
                <h4 class="h4">Lorem ipsum dolor sit.</h4>
                <p class="para2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae recusandae eligendi similique aspernatur porro, ab praesentium illo, dolor dignissimos quae atque hic temporibus earum. In repellendus consequatur velit porro, sequi ducimus voluptatibus impedit repellat!</p>
               </div>
               <div class="box">
                <h4 class="h4">Lorem ipsum dolor sit.</h4>
                <p class="para2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae recusandae eligendi similique aspernatur porro, ab praesentium illo, dolor dignissimos quae atque hic temporibus earum. In repellendus consequatur velit porro, sequi ducimus voluptatibus impedit repellat!</p>
               </div>
               <div class="box">
                <h4 class="h4">Lorem ipsum dolor sit.</h4>
                <p class="para2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae recusandae eligendi similique aspernatur porro, ab praesentium illo, dolor dignissimos quae atque hic temporibus earum. In repellendus consequatur velit porro, sequi ducimus voluptatibus impedit repellat!</p>
               </div>
          </div>
          <div class="heading">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          </div>
      <div className="grid-container">
        {rentals.map((rental, index) => (
          <Link to={`/rental/${rental.title}`} key={index}>
          <div className="rental-card" key={index}>
            <img src={rental.image} alt={rental.title} className="rental-image" /> 
            <div className="rental-details">
              <div className="rental-title">{rental.title}</div>
              {/* <div className="rental-price">${rental.price}</div> */}
              
                 <img src={Start} alt="" className="start"/>
                 <img src={Start} alt="" className="start"/>
                 <img src={Start} alt="" className="start"/>
                 <img src={Start} alt="" className="start"/>
                 <img src={Start} alt="" className="start"/>
                 
            </div>


           
          </div>
          </Link>  
        ))}
      </div>

      

      <div class="heading">
        <h1>Lorem, ipsum dolor sit amet.</h1>
      </div>

      <nav className="fb-section">
      {/* <div className="comments3">
        <img src="./assets/start.png" alt="" style={{ width: "60px", height: "60px", marginTop: "6px" }} />
        <h1 className="headin-com">Lorem ipsum dolor sit.</h1>
      </div> */}

      <div className="fbs">
        <div className="fb">
          <div className="fbc">
            <div><img src={prof1} alt="" style={{ width: "42px", height: "43px" }} /></div>
            <div className="name">
              <h5>Jhon Doe</h5>
              <p>CEO</p>
            </div>
            <div className="fb-li">
              <ul className="fb-ul">
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <img src={str}  alt="" style={{ width: "28px", height: "29px" }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="fbp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptas explicabo id quas esse aut at quo, in dignissimos, nesciunt, libero excepturi? Sed dolores distinctio fugiat quia deleniti natus at deserunt incidunt, totam vel, perferendis commodi porro quas id accusantium possimus blanditiis architecto! Eius amet unde minus quisquam consequuntur. Dicta?
            </p>
          </div>
        </div>

        {/* Repeat the structure for other comments as needed */}
        
      </div>
      <div className="fbs">
        <div className="fb">
          <div className="fbc">
            <div><img src={prof2} alt="" style={{ width: "42px", height: "43px" }} /></div>
            <div className="name">
              <h5>Jhon Doe</h5>
              <p>CEO</p>
            </div>
            <div className="fb-li">
              <ul className="fb-ul">
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <img src={str}  alt="" style={{ width: "28px", height: "29px" }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="fbp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptas explicabo id quas esse aut at quo, in dignissimos, nesciunt, libero excepturi? Sed dolores distinctio fugiat quia deleniti natus at deserunt incidunt, totam vel, perferendis commodi porro quas id accusantium possimus blanditiis architecto! Eius amet unde minus quisquam consequuntur. Dicta?
            </p>
          </div>
        </div>

        {/* Repeat the structure for other comments as needed */}
        
      </div>
      <div className="fbs">
        <div className="fb">
          <div className="fbc">
            <div><img src={prof3} alt="" style={{ width: "42px", height: "43px" }} /></div>
            <div className="name">
              <h5>Jhon Doe</h5>
              <p>CEO</p>
            </div>
            <div className="fb-li">
              <ul className="fb-ul">
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <img src={str} alt="" style={{ width: "28px", height: "29px" }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="fbp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptas explicabo id quas esse aut at quo, in dignissimos, nesciunt, libero excepturi? Sed dolores distinctio fugiat quia deleniti natus at deserunt incidunt, totam vel, perferendis commodi porro quas id accusantium possimus blanditiis architecto! Eius amet unde minus quisquam consequuntur. Dicta?
            </p>
          </div>
        </div>

        {/* Repeat the structure for other comments as needed */}
        
      </div>
    </nav>

      
      <div class="footer">
     <h1 class="footer-h1">Helplama 20221</h1>
       </div>
    </div>
  );
};

export default IndexPage;



