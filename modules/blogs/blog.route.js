const router = require("express").Router();
const {validate} = require("./blog.validate");
const blogController=require("./blog.controller");

router.get("/", (req, res,next) => {
  try{
    res.json({ msg: "hello from blog router" });
  }catch(err){
    next(err);
  };
});

router.post("/",validate, async(req, res,next) => {
  try{
   const result= await blogController.create(req.body);
   res.json({data: result});
  } catch(err){
    next(err);
  }
});

router.put("/:id", (req, res,next) => {
try{
  const { id } = req.params;
  const data = req.body;
  console.log({ id, data });
  res.json({ msg: "hello from put blog router" });
}catch(err){
  next(err);
}
});

router.patch("/:id", (req, res,next) => {
  try{
    const { id } = req.params;
  const data = req.body;
  console.log({ id, data });
  res.json({ msg: "hello from put blog router" });
  }catch(err){
    next(err);
  }
});

router.delete("/:id", (req, res,next) => {
 try{
  const { id } = req.body;

  console.log(req.params.id);
  res.json({ msg: "hello from blog router" });
 }catch(err){
  next(err);
 };
});

module.exports = router;
