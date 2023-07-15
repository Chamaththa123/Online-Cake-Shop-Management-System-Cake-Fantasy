import express from "express";
import Custom from "../models/custom.js"
import multer from "multer";

const router = express.Router();

const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../client/public/uploads")
    },
    filename: (req, file, callback) => {
        callback(null, `photo-${Date.now()}.${file.originalname}`)
    }
})

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(new Error("only image is allow"))
    }
}

const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})

router.post('/custom/save', upload.single("image"), (req, res) => {
    const name = req?.body?.name;
    const email = req?.body?.email;
    const phone = req?.body?.phone;
    const quantity = req?.body?.quantity;
    const type = req?.body?.type;
    const date = req?.body?.date;
    const description = req?.body?.description;
    const status = req?.body?.status;
    const image = req.file?.filename;

    const newCustom = new Custom({
        name, email, phone, quantity, type, date, description, status, image,
    })

    newCustom.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err.message
            });
        }
        return res.status(200).json({
            success: "Custom Order added successfully"
        });
    });
});

export default router;