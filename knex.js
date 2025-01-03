const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "YourStrong@Passw0rd",
    database: "mydb",
    charset: "utf8mb4",
  },
  pool: {
    min: 0,
    max: 7,
  },
});

module.exports = knex;
