import express from "express";
import User from "../models/userModel.js"


const router = express.Router();

router.route("/users").get((req,res) => {
    User.find({role:0}).then((user) => {
        res.json(user)
    }).catch((err) => {
        console.log(err);
    })
});

router.route("/UserCount").get((req,res) => {
    User.find({role:0}).count().then((user) => {
        res.json(user)
    }).catch((err) => {
        console.log(err);
    })
})

export default router;