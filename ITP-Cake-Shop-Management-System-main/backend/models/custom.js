import mongoose from "mongoose";

const customSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  phone: {
    type: Number,
    // required: true,
  },
  image: {
    type: String,
  },
  quantity: {
    type: String,
    // required: true,
  },
  type: {
    type: String,
    // required: true,
  },
  date: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  status:{
    type: String,
    default:"Proccessing"
  }
});

export default mongoose.model("custom", customSchema);
