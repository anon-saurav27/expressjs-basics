// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({ msg: "hello world" });
// });

// router.post("/", (req, res) => {
//   res.json({ msg: "hello post world" });
// });

// module.exports = router;

const router= require("express").Router();
const blogRouter=require("../modules/blogs/blog.router");
const userRouter=require("../modules/users/user.router");
const catRouter=require("../modules/categories/categorie.router");



router.use("/api/v1/blogs", blogRouter);
router.use("/api/v1/users", userRouter);
router.use("/api/v1/categories", catRouter);

module.exports=router;
