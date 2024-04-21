const express= require('express');
const app=express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./'));


mongoose.connect('mongodb+srv://ymishra502:clashofclan123@cluster0.k3vtrf9.mongodb.net/UserFormCateringDB');          

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    eventType: {
      type: String,
    },
    dateOfEvent: {
      type: Date,
    },
    timeOfEvent: {
      type: String,
    },
    guests: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
  });
  
  const userModel=mongoose.model("UserForm",userSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname+"/contact.html");
});

app.post("/",function(req,res){
    let newUser=new userModel({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        eventType:req.body.eventType,
        dateOfEvent:req.body.dateOfEvent,
        timeOfEvent:req.body.timeOfEvent,
        guests:req.body.guests,
        location:req.body.location,
        message:req.body.message
    })
    newUser.save();
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("Server is running on 3000");
})
