import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.route("/users").get((req, res) => {
    User.find({ role: 0 })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.route("/UserCount").get((req, res) => {
    User.find({ role: 0 })
        .count()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.route("/employee").get((req, res) => {
    User.find({ type: 1 })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.route("/empCount").get((req, res) => {
    User.find({ type: 1 })
        .count()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/Emp/:id',(req,res)=>{
    let empId = req.params.id;

    User.findById(empId,(err,order) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            order
        });
    });
});

router.put('/Emp/update/:id',(req,res)=>{
    User.findByIdAndUpdate(
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
