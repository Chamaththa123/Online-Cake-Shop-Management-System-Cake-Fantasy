import express from "express";
import Order from "../models/order.js"


const router = express.Router();


router.post('/order/:id/add',async(req,res)=>{

    const product_id =req.params.id;
    const user_id=req.body.user_id;
    const total= req.body.total;
    const quantity= req.body.quantity;
    const unit_price= req.body.unit_price;
    const shipping= req.body.shipping;
    const note= req.body.note;
    const delivery_name= req.body.delivery_name;
    const delivery_phone= req.body.delivery_phone;
    const delivery_address= req.body.delivery_address;
    const delivery_area= req.body.delivery_area;
    const card_no= req.body.card_no;
    const exp_year= req.body.exp_year;
    const exp_month= req.body.exp_month;

    const newOrder = new Order({
        product_id,user_id,total,quantity,unit_price,shipping,note,delivery_name,delivery_phone,delivery_address,delivery_area
        ,card_no,exp_year,exp_month
        })
    
        newOrder.save((err)=>{
            if(err){
                return res.status(400).json({
                    error: err.message
                });
            }
            return res.status(200).json({
                success:"Order added successfully"
            });
        });

});



router.route("/").get((req,res) => {
    Oitem.find().then((oitems) => {
        res.json(oitems)
    }).catch((err) => {
        console.log(err);
    })
})




export default router;