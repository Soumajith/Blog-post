const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  profession: {
    type: String,
  },
  hobbies: {
    type: [String],
  },
});

export default User;
