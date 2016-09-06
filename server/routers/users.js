import express from 'express';
import User from '../models/User';
import uuid from 'node-uuid';

let router = express.Router();

let sessionMap = [];

router.post('/', (req, res)=> {

  User.findOne({
    username: req.body.username,
    password: req.body.password
  }, (err, data)=> {
    if (data !== null) {
      let sessionId = uuid.v4();
      sessionMap.push({sessionId, userId: data._id});
      res.cookie('sessionId', sessionId);
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }

  });
});

router.get('/cookie', (req, res)=> {
  let sessionId = req.cookies.sessionId;

  let exit = sessionMap.find((session)=> {
    return sessionId === session.sessionId;
  });
  if (exit) {
    res.status(200);
    res.send(exit.userId);
  } else {
    res.sendStatus(403);
  }


});

router.post('/signIn', (req, res)=> {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  User.findOne({username: username}, (err, user) => {
    if (user) {
      res.send(false);
    } else {
      new User({
        username: username,
        password: password,
        email: email,
      }).save((err, result) => { // eslint-disable-line no-unused-vars
        res.send(true);
      });
    }
  });

});

module.exports = router;