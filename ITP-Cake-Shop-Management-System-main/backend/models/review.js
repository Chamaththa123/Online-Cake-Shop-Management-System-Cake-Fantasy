import mongoose from "mongoose";


const reviewSchema = new mongoose.Schema({

  product:
  {
    type: String, 
    required: true 
  },
  name: 
  { type: String, 
    required: true 
  },
  rating: 
  { type: Number, 
    required: true 
  },
  comment: 
  { 
    type: String 
  },
  date: 
  { 
    type: String 
  }
});
export default mongoose.model("Review", reviewSchema);
