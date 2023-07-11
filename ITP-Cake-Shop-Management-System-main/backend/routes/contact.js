import express from "express";
import Contact from "../models/contact.js"


const router = express.Router();


router.post('/contact/add',async(req,res)=>{

   
    const name =req.body.name;
    const email =req.body.email;
    const phone=req.body.phone;
    const subject= req.body.subject;
    const message= req.body.message;
    

    const newContact = new Contact({
        name,email,phone,subject,message
        
        })
    
        newContact.save((err)=>{
            if(err){
                return res.status(400).json({
                    error: err.message
                });
            }
            return res.status(200).json({
                success:"message sended successfully"
            });
        });

});



router.route("/Allcontact").get((req,res) => {
    Contact.find().then((contact) => {
        res.json(contact)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/ContactCount").get((req,res) => {
    Contact.find().count().then((contact) => {
        res.json(contact)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/ReadContactCount").get((req,res) => {
    Contact.find({status:'Read'}).count().then((contact) => {
        res.json(contact)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/UnreadContactCount").get((req,res) => {
    Contact.find({status:'Unread'}).count().then((contact) => {
        res.json(contact)
    }).catch((err) => {
        console.log(err);
    })
})

router.get('/Contact/:id',(req,res)=>{
    let contactId = req.params.id;

    Contact.findById(contactId,(err,contact) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            contact
        });
    });
});

router.delete("/contact/delete/:id", async(req,res) =>{
    let result = await Contact.deleteOne({_id:req.params.id})
    res.send(result)
});

router.put('/contact/update/:id',(req,res)=>{
    Contact.findByIdAndUpdate(
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