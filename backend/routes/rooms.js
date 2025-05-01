var express = require("express");
var router = express.Router();
const db = require('../db/db_connect');
const { rooms } = require('../db/schema');
const bcrypt = require('bcrypt');

router.get("/", async (req,res) => {
  const result = await db.select().from(rooms);
  res.json({result})
})



router.post("/", async (req, res) => {
  const {name,password} = req.body;
  if (password){
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.insert(rooms).values({password: hashedPassword,name});
  }
  else{
    await db.insert(rooms).values({name});
  }
  res.json({message:"Room succesfully created"});
});

module.exports = router;
