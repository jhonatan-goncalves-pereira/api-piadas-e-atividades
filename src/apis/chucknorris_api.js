const express = require("express");
const router = express.Router();
const request = require("request");
const format = require("../format/chucknorris.js")
const guid = require("../format/atividades.js")

router.get("/piadas", (req, res) => {
  // função que consome a API
  request(
    "https://api.chucknorris.io/jokes/random",
    (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        // converte o retorno da API para JSON
        data = JSON.parse(body)
        // exibe o JSON formatado na tela
        res.status(200).send(format.contentFormat(format.dataFormat(data.updated_at), format.dataFormat(data.created_at), data.icon_url, guid.createGUID(), format.chuckUpper(data.value), data.url));
      }
    }
  );
})
module.exports = router;
