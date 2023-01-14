const { request } = require("express");
const express = require("express");
const router = express.Router();

router.get("/atividades", (req, res) => {
  request("https://www.boredapi.com/api/activity", (error, response, body) => {
    if(error) {
      console.log(error);
    } else {
      data = JSON.parse(body);
      res.status(200).send(data);
    }
  });
});

module.exports = router;
