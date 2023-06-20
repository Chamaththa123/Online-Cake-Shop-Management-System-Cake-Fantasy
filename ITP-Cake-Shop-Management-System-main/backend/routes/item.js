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

router.get('/random', async (req, res) => {
    try {
        const data = await Oitem.aggregate([{ $sample: { size: 5 } }]);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


router.route("/C").get((req,res) => {

    Oitem.find({ category: 'Chocolate & GIFT Pack' }).limit(5).then((oitems) => {
        res.json(oitems)

    }).catch((err) => {
        console.log(err);
    })
})

router.route("/oitem/Chocolate").get((req,res) => {

    Oitem.find({category:'Chocolate & GIFT Pack'}).then((oitems) => {
        res.json(oitems)

    }).catch((err) => {
        console.log(err);
    })
})

router.route("/F").get((req,res) => {

    Oitem.find({ category: 'Flowers' }).limit(5).then((oitems) => {
        res.json(oitems)

    }).catch((err) => {
        console.log(err);
    })
})
  
router.route("/oitem/Flowers").get((req,res) => {

    Oitem.find({category:'Flowers'}).then((oitems) => {
        res.json(oitems)

    }).catch((err) => {
        console.log(err);
    })
})

router.route("/mug").get((req,res) => {

    Oitem.find({ category: 'Mugs & Cards' }).limit(5).then((oitems) => {
        res.json(oitems)

    }).catch((err) => {
        console.log(err);
    })
})

router.route("/oitem/Mug").get((req,res) => {

    Oitem.find({category:'Mugs & Cards'}).then((oitems) => {
        res.json(oitems)

    }).catch((err) => {
        console.log(err);
    })
})

router.route("/Ingredient").get((req,res) => {

    Oitem.find({ category: 'Cake Ingredient' }).limit(5).then((oitems) => {
        res.json(oitems)

    }).catch((err) => {
        console.log(err);
    })
})

router.route("/oitem/Ingredient").get((req,res) => {

    Oitem.find({category:'Cake Ingredient'}).then((oitems) => {
        res.json(oitems)

    }).catch((err) => {
        console.log(err);
    })
})

router.route("/All_Oitem").get((req,res) => {

    Oitem.find().count().then((oitems) => {
        res.json(oitems)

    }).catch((err) => {
        console.log(err);
    })
})

router.route("/In_Stock").get((req,res) => {

    Oitem.find({status:'In Stock'}).count().then((oitems) => {
        res.json(oitems)

    }).catch((err) => {
        console.log(err);
    })
})

router.route("/Out_Of_Stock").get((req,res) => {

    Oitem.find({status:'Out Of Stock'}).count().then((oitems) => {
        res.json(oitems)

    }).catch((err) => {
        console.log(err);
    })
})

router.get('/oitem/:id',(req,res)=>{
    let oitemId = req.params.id;

    Oitem.findById(oitemId,(err,oitem) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            oitem
        });
    });
});

router.post('/oitem/:id/review',async(req,res)=>{

    const product =req.params.id;
    const name=req.body.name;
    const rating= req.body.rating;
    const comment= req.body.comment;

    const product1 = await Oitem.findById(product);

    const Reviews = new Review({
        product,name,rating,comment
    })

    await Reviews.save();
    

    product1.ratings += rating;
    product1.numReviews += 1;
    product1.avgRating = product1.ratings / product1.numReviews;
   
    await product1.save();

    res.status(201).json(Reviews);

});

router.route(`/oitem/:id/reviews`).get((req,res) => {
        
    Review.find({product:req.params.id}).then((review) => {
        res.json(review)
    
    }).catch((err) => {
        console.log(err);
    })
});

router.route(`/oitem/:id/reviewscount`).get((req,res) => {
        
    Review.find({product:req.params.id ,rating:1}).then((review) => {
        res.json(review)
    
    }).catch((err) => {
        console.log(err);
    })
});

router.route(`/oitem/:id/5reviewscount`).get((req,res) => {
        
    Review.find({product:req.params.id ,rating:5}).count().then((review) => {
        res.json(review)
    
    }).catch((err) => {
        console.log(err);
    })
});

router.route(`/oitem/:id/4reviewscount`).get((req,res) => {
        
    Review.find({product:req.params.id ,rating:4}).count().then((review) => {
        res.json(review)
    
    }).catch((err) => {
        console.log(err);
    })
});

router.route(`/oitem/:id/3reviewscount`).get((req,res) => {
        
    Review.find({product:req.params.id ,rating:3}).count().then((review) => {
        res.json(review)
    
    }).catch((err) => {
        console.log(err);
    })
});


router.route(`/oitem/:id/2reviewscount`).get((req,res) => {
        
    Review.find({product:req.params.id ,rating:2}).count().then((review) => {
        res.json(review)
    
    }).catch((err) => {
        console.log(err);
    })
});

router.route(`/oitem/:id/1reviewscount`).get((req,res) => {
        
    Review.find({product:req.params.id ,rating:1}).count().then((review) => {
        res.json(review)
    
    }).catch((err) => {
        console.log(err);
    })
});

router.get('/oitem/:id/review',(req,res)=>{
    let oitemId = req.params.id;
    
    Review.findById(oitemId,(err,review) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
            return res.status(200).json({
                
                review
            });
        });
});

router.put('/oitem/update/:id',(req,res)=>{
    Oitem.findByIdAndUpdate(
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

router.delete("/oitem/delete/:id", async(req,res) =>{
    let result = await Oitem.deleteOne({_id:req.params.id})
    res.send(result)
});



export default router;