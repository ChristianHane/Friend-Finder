const express = require('express');
const path = require('path');
let friends = require('../data/friends');
const bodyParser = require('body-parser');

let router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.json(friends.data);
})

router.post('/', (req, res) => {
  let closestFriend;
  let closestFriendCount = 0;
  console.log(req.body);
  const bodyArray = req.body['scores[]'];

  friends.data.forEach(element => {
    count = 0;
    for (let i = 0; i < 10; i++) {   
      count += Math.abs(element['scores[]'][i] - bodyArray[i]);
    }
    if (count < closestFriendCount || closestFriend === undefined) {
      closestFriendCount = count;
      closestFriend = element;
    } 
  })
  
  friends.pushData(req.body);
  res.send(closestFriend);
})

module.exports = router;