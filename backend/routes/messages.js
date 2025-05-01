var express = require('express');
var router = express.Router();
const db = require('../db/db_connect');
const { messages } = require('../db/schema');
const { v4: uuidv4 } = require('uuid'); 

router.get('/' , async (req, res) => {
  const result = await db.select().from(messages.message);
  res.json(result)
  })

router.post('/', async (req, res) => {
  const {message} = req.body;
  const id = uuidv4();
  await db.insert(messages).values({id,message})
  res.json({message: 'Message created!'})
})

module.exports = router;
