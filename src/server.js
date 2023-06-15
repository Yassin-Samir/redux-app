//@ts-nocheck
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/api/users", (req, res) => {
  setTimeout(() => {
    res.send(JSON.stringify({ name: Math.random() }));
  }, 2000);
});
app.listen(3000, () => {
  console.log("server is running");
});
