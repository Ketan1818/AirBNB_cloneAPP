import { useParams } from "react-router-dom"
import house1 from "../Assets/house1.jpg";
import house2 from "../Assets/house2.jpg";
import house3 from "../Assets/house3.jpg";
import house4 from "../Assets/house4.jpg";
import house5 from "../Assets/house5.jpg";
import wifi from "../Assets/wifi.png"
import parking from "../Assets/parking.png"
import pets from "../Assets/pets.png"
import tv from "../Assets/tv.png"
import Pool from '../Assets/icons8-pool-50.png'
import Parking from '../Assets/icons8-pool-50.png'
import Washing from '../Assets/icons8-washing-machine-50.png'
import AC from '../Assets/icons8-ac-50.png'
import fireplace from '../Assets/icons8-fireplace-50.png'
import TV from '../Assets/icons8-tv-50.png'
import heat from '../Assets/icons8-heating-50.png'
import barbi from '../Assets/icons8-barbeque-50.png'
import '../style/place.css'
import { Link } from "react-router-dom";

const mockData = {
    Mumbai: { title: "Mumbai", price: "10,541", description: "Beautiful rental property in Mumbai.",image: house1  },
    Dehli: { title: "Dehli", price: "10,541", description: "Cozy rental property in Delhi.", image: house2 },
    Bangalore: {title: "Bangalore", price: "11,500", description:"Beautiful rental property in Mumbai.", image: house3 },
    Hyderabad: {title: "Hyderabad", price: "11,500", description:"Beautiful rental property in Mumbai.", image: house4 },
    Pune: {title: "Pune", price: "11,500", description:"Beautiful rental property in Mumbai.", image: house5 },
    // Add more properties as needed
  };

export default function PlacePage(){
    const  {title} = useParams();
    console.log("Title:", title);
    console.log("Property:", mockData[title]);
  
    
    
      const property = mockData[title]; // Get property details based on the title
    
      if (!property) {
        return <div>Property not found</div>; // Handle case when property is not found
      }
    
    return(
        // <div>place {title}</div>
        <>
        <nav className="main">
              <div className="rental-details-container">
        {/* <h2>{property.title}</h2> */}
        <img src={property.image} alt={property.title} className="property-image" />

        {/* <h3>Price: ${property.price}</h3> */}
        <p className="des">Description: {property.description}Boutique hotel hosted by Saagar <br />3 guests1 bedroom1 bed1 private bathroom</p>
        <hr />
       
        <div>
        <div><h2>What this place offers</h2>
        <p>Nestled to the south of Gokarna, along the picturesque coastline where the cliffs of the Western Ghats plunge into the Arabian Ocean, lies an unexplored expanse of beach and jungle. Here, where the ocean gently folds into an estuary lies a glimmer of paradise.

Perched atop the hills and affording 360º views of the contrasts of sea- and forest-scapes, It offers a world of quiet indulgence amidst nature.
</p>
        </div>
        </div>
        {/* <div className='cheactbox-main'>
                        <label htmlFor="">
                        <input type="checkbox" className='check'/>
                        <img src={wifi} alt="" className='size' />
                        <span></span>
                        </label>               

                        <label htmlFor="">
                        <input type="checkbox" className='check' />
                        <img src={parking} alt="" className='size' />
                        <span></span>
                        </label>               

                        <label htmlFor="">
                        <input type="checkbox" className='check' />
                        <img src={tv} alt="" className='size'/>
                        <span></span>
                        </label>               

                        <label htmlFor="">
                        <input type="checkbox" className='check' />
                        <img src={pets} alt="" className='size'/>
                        <span></span>
                        </label>     
                </div> */}
          
        <Link to={`/booking/${title}`}>
  <button className="booking-button">Book Now</button>
</Link>

        {/* Add more property details as needed */}

      </div>
      
        </nav>
       <div className="container-footer">
       <nav className="main-footer">
         <h1>Get specific with your favourite amenities</h1><br />
         <p>Choose from top features like these – and more – for a personalised stay.</p>

         <div class="grid-container">
   
    <div class="grid-item">
      <img src={Pool} alt="" />
     Pool
      </div>
    <div class="grid-item">
      <img src={parking} alt="" />
      Free parking
      </div>
    <div class="grid-item">
      <img src={Washing} alt="" />
    Washing machine
    </div>
    <div class="grid-item">
      <img src={AC} alt="" />
      AC
      </div>

   
    <div class="grid-item">
      <img src={fireplace} alt="" />
      Fireplace
      </div>
    <div class="grid-item">
      <img src={TV} alt="" />
      TV
      </div>
    <div class="grid-item">
      <img src={heat} alt="" />
      Heating
      </div>
    <div class="grid-item">
      <img src={barbi} alt="" />
      Barbeque
      </div>
</div>
       </nav>
     </div>
  </>
    )
}

