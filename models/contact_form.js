const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  eventType: {
    type: String,
  },
  dateOfEvent: {
    type: Date,
  },
  timeOfEvent: {
    type: String,
  },
  guests: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model('Contact_details', userSchema);
