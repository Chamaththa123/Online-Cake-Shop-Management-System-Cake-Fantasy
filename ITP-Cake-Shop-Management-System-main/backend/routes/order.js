import express from "express";
import Order from "../models/order.js"


const router = express.Router();


router.post('/order/:id/add',async(req,res)=>{

    const product_id =req.params.id;
    const product_name =req.body.product_name;
    const product_image =req.body.product_image;
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
        product_id,product_name,product_image,user_id,total,quantity,unit_price,shipping,note,delivery_name,delivery_phone,delivery_address,delivery_area
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



router.route("/orders").get((req,res) => {
    Order.find().then((order) => {
        res.json(order)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/OrderCount").get((req,res) => {
    Order.find().count().then((order) => {
        res.json(order)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/ProcessingCount").get((req,res) => {
    Order.find({orderStatus:'Processing'}).count().then((order) => {
        res.json(order)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/CompleteCount").get((req,res) => {
    Order.find({orderStatus:'Complete'}).count().then((order) => {
        res.json(order)
    }).catch((err) => {
        console.log(err);
    })
})

router.get('/order/:id',(req,res)=>{
    let orderId = req.params.id;

    Order.findById(orderId,(err,order) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            order
        });
    });
});

router.delete("/order/delete/:id", async(req,res) =>{
    let result = await Order.deleteOne({_id:req.params.id})
    res.send(result)
});

router.put('/order/update/:id',(req,res)=>{
    Order.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,item)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"updated successfully"
            });
        }
    );
});

export default router;