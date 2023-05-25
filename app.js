const express = require("express");
// const appConfig = require("./config/config");
const bodyParser = require("body-parser");
const router = require('./routes/index.route');
const getConnection = require('./config/db');


// init
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const conn = getConnection();

//middleware
app.use("/",(req, res, next) => {
    req.conn = conn;
    next();
});

// router
app.use("/task",router);
// app.use("/user",userRouter);

// starting server
app.listen(8001,()=>{
    console.log("Server is running....");
})