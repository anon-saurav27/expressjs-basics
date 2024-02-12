const express = require("express");
const indexRouter = require("./routes");

const app = express();
// app.get("/", (req, res) => {
//   res.json({ msg: "hello world" });
// });

// app.listen(8000, () => {
//   console.log("application is running");
// });
app.use(express.json());// to allow json as request body


app.use("/", indexRouter);

app.listen(8000, () => {
  console.log("application is running");
});
