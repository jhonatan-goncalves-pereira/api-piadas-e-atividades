const express = require("express");
const router = express.Router();
const request = require("request");
const format = require("../format/chucknorris.js")

router.get("/piadas", (req, res) => {
  request(
    "https://api.chucknorris.io/jokes/random",
    (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        data = JSON.parse(body)
        api_return = format.contentFormat(format.dataFormat(data.updated_at), format.dataFormat(data.created_at), data.icon_url, data.id, format.chuckUpper(data.value), data.url)
        res.status(200).send(JSON.parse(api_return));
      }
    }
  );
})
module.exports = router;
