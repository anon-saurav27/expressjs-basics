const router=require("express").Router();


//GET ALL Users
router.get("/",(req,res)=>{
            const {limit ,page,search}=req.query;// used for search, sorting and filter

            //DATABASE OPERATION
            res.json({msg:"hello form user router"})
});


//? ADD NEW USER
router.post("/", (req, res) => {
    console.log(req.body);
    //DATABASE OPERATION
    res.json({ msg: "hello from user post router" });
  });

  //? uPDATE SINGLE USER FOR MORE THAN TWO FIELDS
router.put("/:id", (req, res) => {
    const {id}=req.params;
    const data= req.body;
    console.log({id,data});
    //DATABASE OPERATION
    res.json({ msg: "hello from user put blog router" });
  });


  //? update single USER SINGLE FIELD
router.patch("/:id", (req, res) => {
    const {id}=req.params;
    const data=req.body;
    console.log({id, data});
    //DATABASE OPERATION
    res.json({ msg: "hello from user patch router" });
  });

 
//? DELETE SINGLE USER
  router.delete("/:id", (req, res) => {
    console.log(req.params.id);
    //DATABASE OPERTAION
    res.json({ msg: "hello from user delete router" });
  });

module.exports= router;