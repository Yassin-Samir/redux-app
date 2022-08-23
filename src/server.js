//@ts-nocheck
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/api/users", (req, res) => {
  res.send(JSON.stringify({ name: String(Math.random()) }));
});
app.listen(3000, () => {
  console.log("server is running");
});
