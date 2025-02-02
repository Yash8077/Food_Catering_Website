require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const paymentRoute = require("./paymentRoute");
const UserModel = require("./models/user");
const ContactModel = require("./models/contact_form");
const myRouterApp = require("./router");

const app = express();
const PORT = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URL;

// Optimize Static File Serving
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1d" }));
app.use(bodyParser.urlencoded({ extended: true }));

// Async MongoDB Connection
(async () => {
  try {
    await mongoose.connect(mongoURI, {
      connectTimeoutMS: 60000,
      serverSelectionTimeoutMS: 60000,
      family: 4, // Force IPv4
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
})();

// Session Store Optimization
const store = new MongoDBStore({
  uri: mongoURI,
  collection: "userSessions",
  touchAfter: 24 * 3600, // Reduce write frequency
});

app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_secret_key_here",
    resave: false,
    saveUninitialized: false,
    store,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 Day
  })
);

// Routes
app.use(myRouterApp);
app.use("/", paymentRoute);

// Authentication Routes
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.redirect("/login");
  }
  req.session.isAuth = true;
  res.redirect("/home");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (await UserModel.findOne({ email })) return res.redirect("/register");
  const hashedPsw = await bcrypt.hash(password, 12);
  await new UserModel({ username, email, password: hashedPsw }).save();
  res.redirect("/login");
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).send("Logout failed");
    res.redirect("/");
  });
});

// Contact Form Submission
app.post("/submit", async (req, res) => {
  await new ContactModel(req.body).save();
  res.redirect("/home");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
