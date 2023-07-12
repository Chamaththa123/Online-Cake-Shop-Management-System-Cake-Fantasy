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
    User.find({ role: 1 })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.route("/empCount").get((req, res) => {
    User.find({ role: 1 })
        .count()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.post("/AddEmp", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const address = req.body.address;
    const answer = req.body.answer;
    const role = req.body.role;
    const type = req.body.type;

    const newUser = new User({
        name,
        email,
        password,
        phone,
        address,
        answer,
        role,
        type,
    });

    newUser.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err.message,
            });
        }
        return res.status(200).json({
            success: "Employee added successfully",
        });
    });
});

export default router;
