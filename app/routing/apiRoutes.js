const express = require('express');
const path = require('path');
let friends = require('../data/friends');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(friends);
})

router.post('/', (req, res) => {
  const closestFriend = friends.map(friend => (
    {
      name: friend.name,
      photo: friend.photo,
      diff: req.body.scores.map((score, index) => Math.abs(Number(friend.scores[index]) - Number(score))).reduce((acc, curr) => acc + curr),
    }
  )).sort((base, other) => base.diff - other.diff)[0];
  friends.push(req.body);
  res.send(closestFriend);
})

module.exports = router;