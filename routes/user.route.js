const express = require("express");
const router = express.Router();


// GET/todo -> get all todos
// POST/ todo -> add new todo (From url/json)
// PUT/PATCH -> to update todo
// DELETE -> remove particular todo on given id
// GET/todo/:id ->return only todo which id matched

//  user/
router.get("/",(req,res)=>{
    res.status(200).json({
       firstName:"Anjit",
       lastName:"Gc"
    });
});
// user/:id
router.get("/:id",(req,res)=>{
    res.status(200).json({
       firstName:"Anjit",
       lastName:"Gc"
    });
});
module.exports = router;