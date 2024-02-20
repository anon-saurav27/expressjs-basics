const router = require("express").Router();
const { validate } = require("./user.validate");
const { checkRole } = require("../../utils/sessionManager");
const userController = require("./user.controller");

//GET ALL Users
router.get("/",checkRole(["admin","user"]), async(req, res, next) => {
  try {
    const { limit, page, search } = req.query; // used for search, sorting and filter
    // //DATABASE OPERATION
    // res.json({ msg: "hello form user router" });


    const result= await userController.list();
    res.json({data: result});
  } catch (err) {
    next(err);
  }
});

//get one user
router.get("/:id",checkRole(["admin","user"]), async(req, res, next) => {
  try {
    const { limit, page, search } = req.query; // used for search, sorting and filter
    //DATABASE OPERATION
    // res.json({ msg: "hello form user router" });
    const result=await userController.getById(req.params.id);
  } catch (err) {
    next(err);
  }
});

//? ADD NEW USER
router.post("/", checkRole(["admin","user"]), validate, async (req, res, next) => {
  try {
    const result = await userController.create(req.body);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

//? uPDATE SINGLE USER FOR MORE THAN TWO FIELDS
router.put("/:id",checkRole(["admin","user"]), async(req, res, next) => {
  try {
    // const { id } = req.params;
    // const data = req.body;
    // console.log({ id, data });
    // //DATABASE OPERATION
    // res.json({ msg: "hello from user put blog router" });
    const result= await userController.updateById(req.params.id, req.body);
    res.json({data:result});
  } catch (err) {
    next(err);
  }
});

//? update single USER SINGLE FIELD
router.patch("/:id",checkRole(["admin","user"]), async(req, res, next) => {
  try {
    // const { id } = req.params;
    // const data = req.body;
    // console.log({ id, data });
    //DATABASE OPERATION
    // res.json({ msg: "hello from user patch router" });
    const result= await userController.updateById(req.params.id, req.body);
    res.json({data:result});
  } catch (err) {
    next(err);
  }
});

//? DELETE SINGLE USER
router.delete("/:id",checkRole(["admin","user"]), async(req, res, next) => {
  try {
    // console.log(req.params.id);
    //DATABASE OPERTAION
    // res.json({ msg: "hello from user delete router" });

    const result=await userController.removeById(req.params.id);
    res.json({data: result});

  } catch (err) {
    next(err);
  }
});

module.exports = router;
