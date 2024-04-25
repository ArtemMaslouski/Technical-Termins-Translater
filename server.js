const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/content", async function (request, response) {
  try {
    let data = await pool.query(`SELECT * FROM termins`);
    response.send(data.rows);
  } catch (err) {
    console.log(err);
    response.sendStatus(500);
  }
});

app.get("/Russian", async function (request, response) {
  let value = request.query.RussianWord;
  try {
    let data = await pool.query(
      `SELECT * FROM termins WHERE russiantermin = $1`,
      [value]
    );
    debugger;
    response.send(data.rows);
  } catch (err) {
    console.log(err);
    response.sendStatus(500);
  }
});

app.get("/English", async function (request, response) {
  let value = request.query.EnglishWord;
  try {
    let data = await pool.query(
      `SELECT * FROM termins WHERE englishtermin = $1`,
      [value]
    );
    response.send(data.rows);
  } catch (err) {
    console.log(err);
    response.sendStatus(500);
  }
});

app.listen(3000, function () {
  console.log("Server starts his work on 3000 port");
});
