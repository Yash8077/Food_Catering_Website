require("dotenv").config();
const express = require('express');
const bcrypt=require('bcryptjs');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const app = express();
const cors=require("cors");
const corsConfig = {
    origin: "*",
    credential: true,
    methods: ["GET","POST","PUT","DELETE"],
};
app.options("",cors(corsConfig));
app.use(cors(corsConfig));
var http = require('http').Server(app);

const paymentRoute = require('./paymentRoute');

const UserModel=require('./models/user');

const userModel=require('./models/contact_form');

const mongoURI=process.env.MONGO_URL;
// Connect to MongoDB
mongoose.connect(mongoURI)
.then((res) => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('./'));

const store= new MongoDBStore({
    uri:mongoURI,
    collection:'userSessions',
})

app.use(session({
  secret: 'your_secret_key_here', 
  resave: false,
  saveUninitialized: false,
  store: store, 
}));
/*
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
   });*/
/*app.get('/login', (req, res) => {
 res.sendFile(__dirname+'/login.html')
});*/
app.post("/login",async (req,res)=>{
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.redirect('/login');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.redirect('/login');
    }
   req.session.isAuth=true;
    res.redirect('/home');
  
});

/*app.get('/register', (req, res) => {
    res.sendFile(__dirname+'/sign_up.html')
});*/

app.post("/register",async (req,res)=>{
    const {username,email,password}=req.body;
    let user = await UserModel.findOne({email});

    if(user){
        return res.redirect("/register");
    }

    const hashedPsw=await bcrypt.hash(password,12);

    user =new UserModel({
        username,
        email,
        password: hashedPsw
    });

    await user.save();
    res.redirect("/login");
});

/*app.get('/',isAuth, (req, res) => {
    res.sendFile(__dirname+'/index.html')
   });*/
app.post('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err)throw err;
        res.redirect('/');
    })
})

app.post("https://api.web3forms.com/submit",function(req,res){
    res.redirect('/submit');
})
app.post("/submit",function(req,res){
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
    });
    newUser.save();
    res.status(200).redirect("/home");
});
const myRouterApp = require('./router');
app.use(myRouterApp);
app.use('/',paymentRoute);

/*
const isAuth = (req,res,next)=>{
    if(req.session.isAuth){
        next();
    }
    else{
        res.redirect('/login');
    }
}*/
const PORT=process.env.PORT || 8000
app.listen(PORT, () => console.log('Server is running'));
