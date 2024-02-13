const router = require("express").Router();

//GET ALL Users
router.get("/", (req, res) => {
  try {
    const { limit, page, search } = req.query; // used for search, sorting and filter
    //DATABASE OPERATION
    res.json({ msg: "hello form user router" });
  } catch (err) {
    next(err);
  }
});

//? ADD NEW USER
router.post("/", (req, res) => {
  try {
    console.log(req.body);
    //DATABASE OPERATION
    res.json({ msg: "hello from user post router" });
  } catch (err) {
    next(err);
  }
});

//? uPDATE SINGLE USER FOR MORE THAN TWO FIELDS
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log({ id, data });
    //DATABASE OPERATION
    res.json({ msg: "hello from user put blog router" });
  } catch (err) {
    next(err);
  }
});

//? update single USER SINGLE FIELD
router.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log({ id, data });
    //DATABASE OPERATION
    res.json({ msg: "hello from user patch router" });
  } catch (err) {
    next(err);
  }
});

//? DELETE SINGLE USER
router.delete("/:id", (req, res) => {
  try {
    console.log(req.params.id);
    //DATABASE OPERTAION
    res.json({ msg: "hello from user delete router" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
