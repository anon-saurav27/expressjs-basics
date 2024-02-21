require("dotenv").config();

const express = require("express");
const mongoose=require("mongoose");
const morgan = require("morgan");

const indexRouter = require("./routes");
const PORT = Number(process.env.PORT);
const slugify=require("slugify")
const bodyParser = require('body-parser');

const app = express();

mongoose.connect(process.env.DB_URL).then(()=>{
  console.log("Database Connected");
})

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // to allow json as request body
app.use("/assets", express.static("public"));

// app.use((req,res,next)=>{
//       req.body.country="NEpal";
//       next();
// })

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong";
  res.status(500).json({ msg: err });
});

app.listen(PORT, () => {
  console.log(`application is running at port ${PORT}`);
});
