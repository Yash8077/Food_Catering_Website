const express = require("express");
const path = require("path");
const router = express.Router();

const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        return next();
    }
    res.redirect("/login");
};

router.get("/", (req, res) => {
    res.redirect(req.session.isAuth ? "/home" : "/login");
});

router.get("/home", isAuth, (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

const pages = ["landing", "about", "contact", "gallery", "services", "menu", "register", "login"];

pages.forEach(page => {
    router.get(`/${page}`, (req, res) => {
        res.sendFile(path.join(__dirname, `${page}.html`));
    });
});

module.exports = router;
