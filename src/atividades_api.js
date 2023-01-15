const express = require("express");
const router  = express.Router();
const request = require("request");
const returnActivity = require("../format/atividades")

router.get("/atividades", (req, res) => {
  request("https://www.boredapi.com/api/activity", (error, response, body) => {
    if(error) {
      console.log(error);
    } else {
      const data = JSON.parse(body);
      res.status(200).send(returnActivity(data.activity, data.type, data.participants, data.accessibility));
    }
  });
});

module.exports = router;
