const express = require("express");
const app = express();
const port = process.env.PORT;
const knex = require("./knex");

app.get("/", (req, res) => {
  res.send("Hello From Express");
});

app.get("/orders", async (req, res) => {
  const [result] = await knex.raw(`SELECT * FROM orders`);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
