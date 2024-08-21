const express = require("express");
const router = express.Router();
router.get('/',function(req, res){
    if(req.session.isAuth){
        res.redirect('/home');
    }
    else{
        res.redirect('/login');//login
    }
});
const isAuth = (req, res, next) => {
    if(req.session.isAuth){
        next();
    }
    else{
        res.redirect('/login');//login
    }
}

router.get('/home',isAuth,function(req, res){
    res.sendFile(__dirname + "/home.html");
});

router.get('/landing', function(req, res){
    res.sendFile(__dirname + "/landing.html");
});
router.get('/about', function(req, res){
    res.sendFile(__dirname + "/about.html");
});
router.get('/contact', function(req, res){
    res.sendFile(__dirname + "/contact.html");
});
router.get('/gallery', function(req, res){
    res.sendFile(__dirname + "/gallery.html");
});
router.get('/home', function(req, res){
    res.sendFile(__dirname + "/index.html");
});
router.get('/services', function(req, res){
    res.sendFile(__dirname + "/services.html");
});
router.get('/menu', function(req, res){
    res.sendFile(__dirname + "/menu.html");
});
router.get('/login', function(req, res){
    if(req.session.isAuth){
        res.redirect('/home')
    }
    res.sendFile(__dirname + "/login.html");
});
router.get('/',function(req, res){
        res.redirect('/login');
});
router.get('/register', function(req, res){
    res.sendFile(__dirname + "/signup.html");
});


module.exports = router;
