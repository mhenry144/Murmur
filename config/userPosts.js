const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const userPosts = new Schema({
  username: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userPosts);

module.exports = User;
