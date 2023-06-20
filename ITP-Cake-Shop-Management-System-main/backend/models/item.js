import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    item_code: {
        type: String,
        required: true,
      },
      item_name: {
        type: String,
        required: true,
      },
      description1: {
        type: String,
      },
      description2: {
        type: String,
      },
      description3: {
        type: String,
      },
      category: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      ratings: {
        type: Number,
        default: 0,
      },
      numReviews: {
        type: Number,
        default: 0,
      },
      avgRating: {
        type: Number,
        default: 0,
      }}
);

export default mongoose.model("item", itemSchema);