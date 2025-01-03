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
app.get("/users", async (req, res) => {
  const userId = req.query.id;
  const [result] = await knex.raw(`SELECT * FROM users WHERE id = ${userId}`);
  res.send(result);
});

app;


app.post("/hash", async (req, res) => {
  const { password } = req.body;
  const hash = crypto.createHash("md5").update(password).digest("hex"); // การใช้ MD5
  res.json({ hashedPassword: hash });
});

// Code Smell Example: Hardcoding SQL Queries and Using String Interpolation

app.get("/products", async (req, res) => {
  const productId = req.query.id;
  const [result] = await knex.raw(`SELECT * FROM products WHERE id = ${productId}`);
  res.send(result);
});

// Code Smell Example: Not Handling Errors

app.get("/categories", async (req, res) => {
  const [result] = await knex.raw(`SELECT * FROM categories`);
  res.send(result);
});

// Code Smell Example: Not Validating User Input

app.post("/add-user", async (req, res) => {
  const { name, email } = req.body;
  await knex.raw(`INSERT INTO users (name, email) VALUES ('${name}', '${email}')`);
  res.send("User added successfully");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
