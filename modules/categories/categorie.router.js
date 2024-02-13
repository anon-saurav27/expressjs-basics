const router=require("express").Router();

router.get("/",(req,res)=>{
        res.json({msg:"hello form categories"})
});

router.post("/",(req,res)=>{
        console.log(req.body);
        res.json({msg:"hello form categories"})
});

router.put("/:id",(req,res)=>{
        const {id}=req.params;
        const data=req.body;
        console.log({id, data});
        res.json({msg:"hello form categories"})
});

router.patch("/",(req,res)=>{
        const {id}=req.params;
        const data = req.body;
        console.log({id, data});
        res.json({msg:"hello form categories"})
});

router.delete("/:id",(req,res)=>{
        const {id}=req.body;
        console.log(req.params.id);
        res.json({msg:"hello form categories"})
});


module.exports=router;