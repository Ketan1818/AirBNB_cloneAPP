

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const Reservation = require('./models/Reservations.js');
const cancelreservation  = require('./models/delete.js')
const imageDownloader = require('image-downloader');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cookieParser());

// mongoose.connect(process.env.MONGO_URL, {
//   poolSize: 10, // Connection pooling
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   //  poolSize: 10 // Set the desired connection pool size here
// });
mongoose.connect(process.env.MONGO_URL);


const jwtSecret = process.env.JWT_SECRET || 'defaultSecretKey';

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', async (req, res) => {
  const { name, email, password, confirmpassword, number, address, city, state, type } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
      confirmpassword,
      number,
      address,
      city,
      state,
      type
    });
    res.json(userDoc);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        const token = jwt.sign({
          email: userDoc.email,
          id: userDoc._id
        }, jwtSecret);
        res.cookie('token', token, { httpOnly: true }).json(userDoc);
      } else {
        res.status(422).json('Password is incorrect');
      }
    } else {
      res.status(404).json('User not found');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/profile', authenticateToken, async (req, res) => {
  try {
    const { name, email, _id } = await User.findById(req.user.id);
    res.json({ name, email, _id });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/logout', (req, res) => {
  res.clearCookie('token').json(true);
});

app.post('/uploads-by-links', async (req, res) => {
  const { link } = req.body;
  const newName = 'photo' + Date.now() + '.jpg';
  try {
    await imageDownloader.image({
      url: link,
      dest: __dirname + '/uploads/' + newName
    });
    res.json(newName);
  } catch (error) {
    console.error('Error downloading image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ... (reservation and other routes)
app.post('/reservations', authenticateToken, async (req, res) => {
  // mongoose.connect(process.env.MONGO_URL);
  const { name, email, number, checkin, checkout, city, guest, image, price } = req.body;
  const propertyTitle = req.body.propertyTitle; // Get property title from the request body
  try {
    const reservation = new Reservation({
      name,
      email,
      number,
      checkin,
      checkout,
      city,
      guest,
      propertyTitle,
      image,     
      price,
      
    });

    await reservation.save();
    res.status(201).json({ message: 'Reservation submitted successfully' });
  } catch (error) {
    console.error('Error saving reservation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.status(403).json({ error: 'Forbidden' });
    req.user = user;
    next();
  });
}

app.get('/reservations', authenticateToken, async (req, res) => {
  try {
    const reservations = await Reservation.find({ email: req.user.email }); // Fetch reservations for the authenticated user
    res.json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/cancelreservation/:id', (req,res)=>{
  const id = req.params.id;
    Reservation.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});



// const express = require('express');
// const cors = require('cors');
// const mongoose = require("mongoose");

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('./models/User.js');
// const Reservation = require('./models/Reservations.js')
// const imageDownloader=require("image-downloader")
// const cookieParser = require('cookie-parser');
// const { config } = require('dotenv');
// const path = require('path');
// const multer = require('multer');
// const fs= require("fs");
// const bodyParser = require('body-parser');

// require('dotenv').config();
// const app = express();

// app.use(express.json());

// app.use(cors({
//     credentials: true,
//     origin: "http://localhost:3000"
// }))
// app.use('/uploads', express.static(__dirname + '/uploads'));


// mongoose.connect(process.env.MONGO_URL);

// const bcryptSalt = bcrypt.genSaltSync(10);
// const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';


// app.get('/test', (req,res) => {
//     mongoose.connect(process.env.MONGO_URL);
//     res.json('test ok');
//   });
  

//   app.post('/register', async (req,res) => {
//     mongoose.connect(process.env.MONGO_URL);
//     const {name,email,password,confirmpassword,number,address,city,state,type} = req.body;
  
//     try {
//       const userDoc = await User.create({
//         name,
//         email,
//         password:bcrypt.hashSync(password, bcryptSalt),
//         confirmpassword,
//         number,
//         address,
//         city,
//         state,
//         type
//       });
//       res.json(userDoc);
//     } catch (e) {
//       res.status(422).json(e);
//     }
  
//   });

  
// app.post('/login', async (req,res) => {
//     mongoose.connect(process.env.MONGO_URL);
//     const {email,password} = req.body;
//     const userDoc = await User.findOne({email});
//     if (userDoc) {
//       const passOk = bcrypt.compareSync(password, userDoc.password);
//       if (passOk) {
//         jwt.sign({
//           email:userDoc.email,
//           id:userDoc._id,
         
//         }, jwtSecret, {}, (err,token) => {
//           if (err) throw err;
//           res.cookie('token', token).json(userDoc);
//         });
//       } else {
//         res.status(422).json('pass not ok');
//       }
//     } else {
//       res.json('not found');
//     }
//   });

//   app.get('/profile', (req,res) => {
//     mongoose.connect(process.env.MONGO_URL);
//     const token = req.cookies.token;
//     if (token) {
//       jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//         if (err) throw err;
//         const {name,email,_id} = await User.findById(userData.id);
//         res.json({name,email,_id});
//       });
//     } else {
//       res.json(null);
//     }
//   });
   

//   app.post("/logout",(req,res)=>{
//     mongoose.connect(process.env.MONGO_URL);
//     res.cookie("token","").json(true);
//   })

//   console.log({__dirname});
//   app.post("/uploads-by-links",async (req,res)=>{
//     mongoose.connect(process.env.MONGO_URL);
//     const {link} = req.body;
//     const newName = 'photo' + Date.now()+ ".jpg";
//    await imageDownloader.image({
//       url: link,
//       dest: __dirname + "/uploads/" +newName,
//     });
//     res.json(newName);
//   })

// const photoMiddleware= multer({dest:'uploads/'});
// mongoose.connect(process.env.MONGO_URL);
// app.post('/upload', photoMiddleware.array('photos',100),(req,res)=>{
//    const uploadedFiles=[];
//    for(let i =0; i < req.files.length; i++){
//        const {path,originalname} = req.files[i];
//        const parts = originalname.split('.');
//        const ext = parts[parts.length -1];
//        const newPath = path + '.' + ext;
//        fs.renameSync(path, newPath);
//        uploadedFiles.push(newPath.replace('uploads/', ''));
//    }
//   res.json(uploadedFiles);
// })

// app.use(bodyParser.json());
// app.use(cookieParser());

// // Authentication Middleware
// const authenticateToken = (req, res, next) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ error: 'Unauthorized' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ error: 'Forbidden' });
//     req.user = user;
//     next();
//   });
// };

// app.post('/reservations', authenticateToken, async (req, res) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const { name, email, number, checkin, checkout, city, guest, image, title, price } = req.body;

//   try {
//     const reservation = new Reservation({
//       name,
//       email,
//       number,
//       checkin,
//       checkout,
//       city,
//       guest,
//       image,
//       title,
//       price
//     });

//     await reservation.save();
//     res.status(201).json({ message: 'Reservation submitted successfully' });
//   } catch (error) {
//     console.error('Error saving reservation:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

//   app.listen(3001);


  
// app.post('/reservations', (req, res) => {
  // mongoose.connect(process.env.MONGO_URL);
//   const { name, email, number, checkin, checkout, city, guest } = req.body;

//   const reservation = new Reservation({
//     name,
//     email,
//     number,
//     checkin,
//     checkout,
//     city,
//     guest,
//   });

//   reservation.save()
//     .then(() => {
//       res.json({ message: 'Reservation submitted successfully' });
//     })
//     .catch((error) => {
//       console.error('Error saving reservation:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });
// });