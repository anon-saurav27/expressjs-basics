const router=require("express").Router();

router.get("/",(req,res)=>{
        res.json({msg:"hello form categories"})
});


module.exports=router;