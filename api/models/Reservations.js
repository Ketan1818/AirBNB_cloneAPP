const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  checkin: { type: Date, required: true },
  checkout: { type: Date, required: true },
  city: { type: String, required: true },
  guest: { type: String, required: true },
  propertyTitle: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
