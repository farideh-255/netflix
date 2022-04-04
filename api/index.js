const express=require("express");
const app =express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");

const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const MovieRoute=require("./routes/movies");
const ListRoute=require("./routes/lists")


dotenv.config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL,
     {useNewUrlParser:true,
      useUnifiedTopology:true
     }
  ).then(()=>console.log("DB Connection successful")).catch(err=>console.log(err));
}

 app.use(express.json());
 app.use("/api/auth",authRoute);
 app.use("/api/users",userRoute);
 app.use("/api/movies",MovieRoute);
 app.use("/api/lists",ListRoute);

app.listen(8800,()=>{
    console.log("backend server is running");
})