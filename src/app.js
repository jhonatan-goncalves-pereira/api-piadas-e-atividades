const express = require("express");
const app = express();
//const path = require("path");
const PORT = "8080";

app.use(express.static(__dirname + "/src"));

// rota principal
app.get("/", function (req, res) {
  res.status(200).send("<h1>Este é o app do Grupo 4 🐊</h1>");
});

app.use("/api", require("./apis/atividades_api")); // rota: get /api/atividades

app.use("/api", require("./apis/chucknorris_api")); // rota: get /api/piadas

app.listen(PORT, function () {
  console.log(`Ouvindo a porta ${PORT}`);
});
