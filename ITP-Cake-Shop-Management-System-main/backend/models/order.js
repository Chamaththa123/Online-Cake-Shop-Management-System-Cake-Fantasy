import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  product_image: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
  },
  total: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit_price: {
    type: Number,
    required: true,
  },
  shipping: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
  },
  delivery_name: {
    type: String,
    required: true,
  },
  delivery_phone: {
    type: Number,
    required: true,
  },
  delivery_address: {
    type: String,
    required: true,
  },
  delivery_area: {
    type: String,
    required: true,
  },
  card_no: {
    type: Number,
    required: true,
  },
  exp_year: {
    type: Number,
    required: true,
  },
  exp_month: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    default: "Success"
  },
  orderStatus: {
    type: String,
    default: "Processing"
  }
});

export default mongoose.model("order", orderSchema);
