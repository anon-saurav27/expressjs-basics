const router =require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from blog router" });
});

router.post("/", (req, res)=>{
  console.log(req.body);
    res.json({msg: "hello from post blog router"})
});

router.put("/:id",(req, res)=>{
      const {id}=req.params;
      const data=req.body;
      console.log({id, data});
      res.json({msg: "hello from put blog router"})
});


router.patch("/:id",(req,res)=>{
  const {id}=req.params;
  const data=req.body;
  console.log({id, data});
  res.json({msg:"hello from put blog router"});
})

router.delete("/:id",(req,res)=>{
  const {id}=req.body;

  console.log(req.params.id);
  res.json({msg:"hello from blog router"});
})



module.exports= router;