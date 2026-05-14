     require("dotenv").config();

const { Client } = require("pg");

console.log("ENV CHECK:", {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  db: process.env.PGDATABASE,
});

const client = new Client({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT), 
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL!");

    return client.query("SELECT * FROM users");
  })
  .then((result) => {
    console.log("Users table:");
    console.log(result.rows);
  })
  .catch((err) => {
    console.error("Error:");
    console.error(err);
  })
  .finally(() => {
    client.end();
  });
