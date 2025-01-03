require("dotenv").config();

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    charset: "utf8mb4",
  },
  pool: {
    min: 0,
    max: 7,
  },
});

module.exports = knex;
