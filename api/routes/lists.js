const router=require("express").Router();
const List=require("../models/List");
const verify=require("../verifyToken");

//create 
router.post("/create",verify,async(req,res)=>{
    console.log("list auth user=>",req.user);
    if( req.user.isAdmin){
        const newList=new List(req.body);
        try{
            const savedList=await newList.save();
            res.status(201).json(savedList);
        }catch(err){
            res.status(500).json(err);
            console.log("create list err=>",err);
        }

    }else{
        res.status(403).json("You are not allowed");
    }
})

//update

router.put("/:id", verify,async(req,res)=>{

    if( req.user.isAdmin){
    
                try{
                    const updatedList=await Movie.findByIdAndUpdate(req.params.id,
                                                                    {$set: req.body },
                                                                    {new:true});
                    res.status(200).json(updatedList);
                    console.log("update movie successfuly");
                    
                }catch(err){
                    res.status(500).json(err);
                    console.log("some error in updating movie");
                }

    }else{
        res.status(403).json("You can update only your account!")  
    }
})


//delete


router.delete("/:id", verify,async(req,res)=>{

    if( req.user.isAdmin){     
             try{
                 await List.findByIdAndDelete(req.params.id);
                    res.status(200).json("list has been deleted");
                    console.log(" list has been deleted successfuly ,id=",req.params.id);
                    
                }catch(err){
                    res.status(500).json(err);
                    console.log("some error occured during delete list process");
                }
           
    }else{
        res.status(403).json("You are allowed!")  
    }
})



router.get("/",verify,async(req,res)=>{
    const typeQuery=req.query.type;
    const genreQuery=req.query.genre;

   // console.log("get lists***");
    let list=[];
    try{
        if(typeQuery){
            if(genreQuery){
                list=await List.aggregate([
                    {$sample:{size:10}},
                    {$match:{ type:typeQuery,genre:genreQuery}}
                ]);
            }else{
                list=await List.aggregate([
                    {$sample:{size:10}},
                    {$match:{ type:typeQuery}}
                ])
            }

        }else{
            list=await List.aggregate([
                {$sample:{size:10}}
            ])
        }

        res.status(200).json(list);

    }catch(err){
        res.status(500).json(err)
    }
})


//get

router.get("/find/:id", async(req,res)=>{    
             try{
                 const list=await List.findById(req.params.id);
                 res.status(200).json(list);
                       
                }catch(err){
                    res.status(500).json(err);
                    console.log("some error");
                }
           
})


//get random

router.get("/random", async(req,res)=>{   
    const type=req.query.type; 
    let movie;
    try{
        if(type==="series"){
            movie=await Movie.aggregate([
                { $match:{isSeries:true}},
                {$sample:{size:1}}
            ])
        }else{
            movie=await Movie.aggregate([
                { $match:{isSeries:false}},
                {$sample:{size:1}}
            ]);
        }

        res.status(200).json(movie);
              
       }catch(err){
           res.status(500).json(err);
           console.log("some error");
       }
  
})


// get all


router.get("/all", verify,async(req,res)=>{

    const query=req.query.new;
    console.log("get all movies user=>",req.user);
    if( req.user.isAdmin){     
             try{
                   const movies=query ? 
                   await Movie.find().sort({_id:-1}).limit(5):
                   await Movie.find();

                  //  res.status(200).json(movies);
                    res.status(200).json(movies.reverse());
                    console.log("all movies were recieved ");
                    
                }catch(err){
                    res.status(500).json(err);
                    console.log("some error");
                }
           
    }else{
        res.status(403).json("You are not allowed to see all movies")  
    }
})

 //get user stats


 router.get("/stats",async(req,res)=>{
     const today=new Date();
     const lastYear=today.setFullYear(todayFullYear()-1);
    
     const monthArray=[
        "January","February","March","April","May","June","July",
        "August","September","October","November","December"
     ]; 


     try{
        const data=await User.aggregate([
            {  $project:{
                  month:{$month:"$createdAt"}
              }
            },{
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