const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

router.post("/", (req, res) => {
  res.json({ msg: "hello post world" });
});

module.exports = router;
