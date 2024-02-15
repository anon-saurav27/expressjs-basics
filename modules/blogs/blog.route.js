const router = require("express").Router();

router.get("/", (req, res,next) => {
  try{
    res.json({ msg: "hello from blog router" });
  }catch(err){
    netx(err);
  };
});

router.post("/", (req, res,next) => {
  try{
    console.log(req.body);
  res.json({ msg: "hello from post blog router" });
  }catch(err){
    next(err);
  };
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
