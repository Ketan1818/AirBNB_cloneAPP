import upload from "./Assets/upload.png"
import wifi from "./Assets/wifi.png"
import parking from "./Assets/parking.png"
import pets from "./Assets/pets.png"
import tv from "./Assets/tv.png"
// import vedio from "../Assets/vedio.png"

export default function Perks({selected,onChange}){
    return(
       <>
         <div className='main-btn2'>
                        {/* <input type="text" className='input-form' placeholder={"Add using a link...jpg "} name="" id="" /> */}
                      {/* <button className='btn-2'>Add&nbsp; Photo</button> */}
                    {/* </div>
                    <div className='main-btn1'>
                    <button className='btn-1'><img src={upload} alt="" className='img-up' />Upload from device</button>
                    </div>
                   
                    <h2 className='form-h2'>Description</h2>
                    <p className='p'>description of the place</p>
                    <textarea name="" id="" cols="30" rows="10" className='textarea'></textarea>
                <div>
                <h2 className='form-h2'>Perks</h2>
                    <p className='p'>select all the perks</p> */}
                    <div className='cheactbox-main'>
                        <label htmlFor="">
                        <input type="checkbox" className='check'/>
                        <img src={wifi} alt="" className='size' />
                        <span>Wifi</span>
                        </label>               

                        <label htmlFor="">
                        <input type="checkbox" className='check' />
                        <img src={parking} alt="" className='size' />
                        <span>Free parking spot</span>
                        </label>               

                        <label htmlFor="">
                        <input type="checkbox" className='check' />
                        <img src={tv} alt="" className='size'/>
                        <span>Tv</span>
                        </label>               

                        <label htmlFor="">
                        <input type="checkbox" className='check' />
                        <img src={pets} alt="" className='size'/>
                        <span>Pets</span>
                        </label>     
                </div>
          

                        
                    </div>
       </>
    )
}