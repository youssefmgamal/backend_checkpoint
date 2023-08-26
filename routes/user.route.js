const users = require("express").Router();
const usermodel = require("../models/user.model");

users.get("/", async (req, res) => {
  try {
    let users = await usermodel.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send("check your code");
  }
});

users.get("/:id", async (req, res) => {
  try {
    let game = await usermodel.findById(req.params.id);
    res.status(200).send(game);
  } catch (err) {
    res.status(500).send("check your code");
  }
});

users.post("/add-game", async (req, res) => {
  try {
    let newgame = new usermodel({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });
    await newgame.save();
    res.status(200).send(newgame);
  } catch (err) {
    console.log(err);
    res.status(500).send("check your code");
  }
});

users.post("/many", async (req, res) => {
  try {
    let newusers = await usermodel.insertMany(req.body);
    res.status(200).send(newusers);
  } catch (err) {
    console.log(err);
    res.status(500).send("check your code");
  }
});
users.put("/:id", async (req, res) => {
  try {
    let updatedgame = await usermodel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).send(updatedgame);
  } 
  catch (err) {   
    res.status(500).send("check your code");
  }
});
users.delete("/:id", async (req, res) => {
  try{
    let deleteduser = await usermodel.findByIdAndDelete(req.params.id);
    res.status(200).send(deleteduser);    
  } catch(err){    
    res.status(500).send("check your code");
  }
});
users.delete("/", async (req, res) => {
  try{
    let deletedusers = await usermodel.deleteMany();
    res.status(200).send(deletedusers);    
  } catch(err){    
    res.status(500).send("check your code");
  }
});

module.exports = users;
