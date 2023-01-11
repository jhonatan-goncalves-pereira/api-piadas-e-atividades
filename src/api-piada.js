const express = require("express");
const router = express.Router();

router.get("/piadas", (req, res) => {
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://api.chucknorris.io/jokes/random`, options)
    .then((result) => {
      result.json().then((data) => {
        res.status(200).send(data);
        //console.log(data);
      });
    })
    .catch((err) => console.log("Erro:" + err, message));
});

module.exports = router;
