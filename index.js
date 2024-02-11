const express = require("express");
const indexRouter = require("./routes");

const app = express();
// app.get("/", (req, res) => {
//   res.json({ msg: "hello world" });
// });

// app.listen(8000, () => {
//   console.log("application is running");
// });

app.use("/", indexRouter);

app.listen(8000, () => {
  console.log("application is running");
});
