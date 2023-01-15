const express = require("express");
const router  = express.Router();
const request = require("request");
const activity = require("../format/atividades.js")

router.get("/atividades", (req, res) => {
  request("https://www.boredapi.com/api/activity", (error, response, body) => {
    if(error) {
      console.log(error);
    } else {
      // converte o retorno da API para JSON
      const data = JSON.parse(body);
      // exibe na tela o JSON formatado
      res.status(200).send(activity.returnActivity(data.activity, data.type, data.participants, data.accessibility));
    }
  });
});

module.exports = router;
