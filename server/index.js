const express=require("express");
const mongoose =require("mongoose");
const UserRouter =require("./routes/UserRouter.js");
const bodyParser=require("body-parser");
const cors =require("cors");
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use("/user",UserRouter);

mongoose.connect(`mongodb+srv://roshanadmin:roshanmongo@cluster0.zmwyl.mongodb.net/crud?retryWrites=true&w=majority`)
.then(
    app.listen("8000",()=>{
        console.log("Hi I am in server");
    })
).catch(err=>{
    console.log(err);
})