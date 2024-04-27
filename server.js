const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/content", async function (request, response) {
  try {
    let data = await pool.query(
      `SELECT * FROM termins ORDER BY russiantermin ASC`
    );
    response.send(data.rows);
  } catch (err) {
    console.log(err);
    response.sendStatus(500);
  }
});

app.post("/content", async function (request, response) {
  let { Russian, English, Explonation } = request.body;

  try {
    await pool.query(
      `INSERT INTO termins(russiantermin,englishtermin,explonation) VALUES($1,$2,$3)`,
      [Russian, English, Explonation]
    );
    response.sendStatus(200);
    debugger;
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
