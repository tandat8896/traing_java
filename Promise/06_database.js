require("dotenv").config();

const { Client } = require("pg");

const client = new Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

client.connect()

  .then(() => {

    console.log("Connected to PostgreSQL!");

    return client.query("SELECT * FROM users");
  })

  .then((result) => {

    console.log("Users table:");
    console.log(result.rows);

  })

  .catch((err) => {

    console.log("Error:");
    console.log(err);

  })

  .finally(() => {

    client.end();

  });
