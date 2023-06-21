import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    product_id: {
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
        type: String,
        required: true,
      },
      unit_price: {
        type: String,
        required: true,
      },
      shipping: {
        type: String,
        required: true,
      },
      note: {
        type: String,
        required: true,
      },
      delivery_name: {
        type: String,
        required: true,
      },
      delivery_phone: {
        type: String,
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
        type: String,
        required: true,
      },
      exp_year: {
        type: String,
        required: true,
      },
      exp_month: {
        type: String,
        required: true,
      },
      }
);

export default mongoose.model("order", orderSchema);