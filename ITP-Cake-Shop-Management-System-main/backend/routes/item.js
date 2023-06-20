import express from "express";
import Oitem from "../models/item.js"
import multer from "multer";

const router = express.Router();


const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../frontend/public/uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`photo-${Date.now()}.${file.originalname}`)
    }
})

const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only image is allow"))
    }
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})

router.post('/oitem/save',upload.single("image"),(req,res) =>{
    const item_code = req?.body?.item_code;
    const item_name = req?.body?.item_name;
    const description1 = req?.body?.description1;
    const description2 = req?.body?.description2;
    const description3 = req?.body?.description3;
    const category = req?.body?.category;
    const status = req?.body?.status;
    const price = req?.body?.price;
    const image = req.file?.filename;
   
   const newOitem = new Oitem({
    item_code,item_name,description1,description2,description3,category,status,price,image,   
    })

    newOitem.save((err)=>{
        if(err){
            return res.status(400).json({
                error: err.message
            });
        }
        return res.status(200).json({
            success:"Item added successfully"
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