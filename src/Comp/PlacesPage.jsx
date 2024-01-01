import '../style/placespage.css'
import {Link, useParams} from "react-router-dom";
import upload from "../Assets/upload.png"
import axios from "axios"
import Perks  from '../Perks';
import { useState } from 'react';

export default function PlacesPage(){
    const {action} = useParams();
   const [title,setTitle] = useState("");
   const [address,setAddress] = useState("");
   const [addedPhotos,setAddedbPhotos] = useState([]);
   const [photolinks,setPhotolinks]= useState("");
   const [description,setDescription]= useState("");
   const [perks,setPerks] = useState("");
   const [extrainfo,setExtrainfo]= useState("");
   const [checkin,setCheackin] = useState("");
   const [checkout,setCheckout]= useState("")
   const [maxGuests,setMaxguests] = useState(1);
   

   function inputHeader(text){
    return(
        <h2 className='form-h2'>{text}</h2>
    )
   }
    
   function inputDescription(text) {
    return(
        <p className='p'>{text}</p>
    )
   }

   function preInput(header,description){
    return(
        <>
        {inputHeader(header)}
        {inputDescription(description)}
        </>
    )
   }


   async function addedPhotosByLink(ev){
    ev.preventDefault();
    const {data:filename} =  await axios.post("/uploads-by-links",{link: photolinks});
   setAddedbPhotos(prev=>{
    return [...prev, filename];
   });
   setPhotolinks('');
}
     
   function uploadPhotos(ev){
    const files =ev.target.files;
    const data = new FormData();
   for(let i=0;i<files.length;i++){
    data.append('photos',files[i]);
   }        
    axios.post('/upload' , data, {
        headers: {'Content-Type':'multipart/form-data'}
    }).then(response =>{
        const {data:filenames} = response;
        setAddedbPhotos(prev=>{
            return [...prev, ...filenames];
        })
        
    })
   }
    return (
        <div>
             <h1 className='h1'>My Accommodations</h1>
            {action !== 'new' && (   
                <div className="main" >
                <Link className="link1" to={"/places/new"}>+ Add New Place</Link>
            </div>
            )}
            {action !== 'new' && (
                <form className='contain'>
                    {preInput("Title", "")}
                   
                    <input type="text" value={title} onChange={ev=>setTitle(ev.target.value)} className='input-form' placeholder='title, for example : My lovely apt' />
                    {preInput("Address","Address to this place")}
                   
                    <input type="text" value={address} onChange={ev=>setAddress(ev.target.value)} className='input-form' placeholder='address'/>
                    {preInput("Photos","more = better")}
                  
                    <div className='main-btn2'>
                        <input type="text" value={photolinks} onChange={ev=>setPhotolinks(ev.target.value)} className='input-form' placeholder={"Add using a link...jpg "} name="" id="" />
                      <button onClick={addedPhotosByLink} className='btn-2'>Add&nbsp; Photo</button>
                    </div>
                    <div className='main-btn1'>
                        {/* {addedPhotos.length> 0 && addedPhotos.map(link =>(
                            <div>
                            <img src={`http:localhost:3000/uploads/${link}`} alt="" />
                            </div>
                        ))} */}
         {addedPhotos.length > 0 &&
          addedPhotos.map((link, index) => (
            <div key={index}>            
              <img src={`http://localhost:3000/uploads/${link}`} alt='' />
            </div>
          ))}
                    <label className='btn-1'>
                        <input type="file" multiple className='file' onChange={uploadPhotos}/>
                        <img src={upload} alt="" className='img-up' />
                        Upload from device
                        </label>
                    </div>
                   {preInput("Description","description of the place")}
                   
                    <textarea name="" id="" cols="30" rows="10" className='textarea' value={description} onChange={ev=>setDescription(ev.target.value)}></textarea>
                   {preInput("Perks","select all the perks")}
                    
                    <Perks selected={perks} onChange={setPerks}/>
                    {preInput("Extra info",'house rules, etc')}

                    <textarea value={extrainfo} onChange={ev=>setExtrainfo(ev.target.value)} name="" id="" cols="30" rows="10" className='textarea'></textarea>
                    {preInput("Check in & out times",'add check in and out times, remember to have some time window for cleaning the room between guests')}
                  
                   <div className='cheach-in-out'>
                    <div className=''>
                        <h3 className='c-h3'>Check in time</h3>
                        <input type="number" value={checkin} onChange={ev=>setCheackin(ev.target.value)} placeholder='14'/>
                    </div>
                    <div>
                        <h3 className='c-h3'>Check out time</h3>
                        <input type="number" value={checkout} onChange={setCheckout} placeholder='11'/>
                    </div>
                    <div>
                        <h3 className='c-h3'>Max number of </h3>
                        <input type="number" value={maxGuests} onChange={ev=>setMaxguests(ev.target.value)}/>
                    </div>
                   </div>
                   <button className='save-btn'>Save</button>
                </form>
            )}
            
            Place
        </div>
    )
}