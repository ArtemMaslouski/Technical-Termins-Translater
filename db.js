const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Artsiom_20031",
  database: "TechnicalTermins",
});

module.exports = pool;
