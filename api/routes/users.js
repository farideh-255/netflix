const router=require("express").Router();
const User=require("../models/User");
const CryptoJS=require("crypto-js");
const verify=require("../verifyToken");

//update

router.put("/:id", verify,async(req,res)=>{

    console.log("editget id=>",req.user.id);

    if(req.user.id===req.params.id || req.user.isAdmin){
            if(req.user.password){
                req.body.password=CryptoJS.AES.encrypt(
                  process.env.SECRET_KEY
                ).toString();
            }

                try{
                    const updatedUser=await User.findByIdAndUpdate(req.params.id,
                                                                   {$set: req.body },{new:true});
                    res.status(200).json(updatedUser);
                    console.log("update user successfuly");
                    
                }catch(err){
                    res.status(500).json(err);
                    console.log("some error");
                }
           
            console.log("pass is equal");
    }else{
        res.status(403).json("You can update only your account!")  
    }
})


//delete


router.delete("/:id", verify,async(req,res)=>{

    console.log("delete id=>",req.user.id);

    if(req.user.id===req.params.id || req.user.isAdmin){     
             try{
                 await User.findByIdAndDelete(req.params.id);
                    res.status(200).json("user has been deleted");
                    console.log(" user has been deleted successfuly222");
                    
                }catch(err){
                    res.status(500).json(err);
                    console.log("some error");
                }
           
    }else{
        res.status(403).json("You can delete only your account!")  
    }
})


//get



router.get("/find/:id", async(req,res)=>{    
             try{
                 const user=await User.findById(req.params.id);
                 const {password, ...info }=user._doc;
                 res.status(200).json(info);
                       
                }catch(err){
                    res.status(500).json(err);
                    console.log("some error");
                }
           
})


// get all


router.get("/", verify,async(req,res)=>{

    console.log("req user=>",req.user);
    const query=req.query.new;
    if( req.user.isAdmin){     
             try{
                   const users=query ? 
                   await User.find().sort({_id:-1}).limit(5):
                   await User.find();

                    res.status(200).json(users);
                    console.log("all movies were recieved successfuly");
                    
                }catch(err){
                    res.status(500).json(err);
                    console.log("some error");
                }
           
    }else{
        res.status(403).json("You are not allowed to see all users")  
    }
})

 //get user stats


 router.get("/stats",async(req,res)=>{
     const today=new Date();
     const lastYear=today.setFullYear(today.setFullYear()-1);
    
     const monthArray=[
        "January","February","March","April","May","June","July",
        "August","September","October","November","December"
     ]; 


     try{
        const data=await User.aggregate([
            {  $project:{
                  month:{$month:"$createdAt"}
              }
            },
            { $sort : {createdAt : -1}} ,
            {
               $group:{
                   _id:"$month",
                   total:{$sum:1}
               }
              }
       ]);
       res.status(200).json(data);

     }catch(err){
         res.status(500).json(err);   
     }
    })


 module.exports=router