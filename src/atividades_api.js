const express = require("express");
const router = express.Router();

router.get("/atividades", (req, res) => {
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://www.boredapi.com/api/activity`, options)
    .then((result) => {
      result.json().then((data) => {
        //console.log(data);
        res.status(200).send(data);
      });
    })
    .catch((err) => console.log("Erro:" + err, message));
});

module.exports = router;
