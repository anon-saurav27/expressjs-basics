const router = require("express").Router();
const { validate } = require("./blog.validate");
const blogController = require("./blog.controller");
const slugify = require("slugify");
const { checkRole } = require("../../utils/sessionManager");

router.get("/", checkRole(["admin", "user"]), async (req, res, next) => {
  try {
    // res.json({ msg: "hello from blog router" });
    const result = await blogController.list();
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkRole(["admin", "user"]), async (req, res, next) => {
  try {
    // res.json({ msg: "hello from blog router" });
    // const result= await blogController.list();
    // res.json({data:result});
    // ?const result = await blogController.getById(req.params.id, req.body);
    // if (!result) {
    //   return res.status(404).json({ error: "Document not found" });
    // }
    // const timeDifference = Date.now() - result.updatedAt.getTime();
    // let timeAgo;

    // if (timeDifference < 3600000) {
    //   // less than an hour
    //   timeAgo = Math.ceil(timeDifference / 60000) + " minutes ago";
    // } else {
    //   timeAgo = Math.floor(timeDifference / 3600000) + " hours ago";
    // }

    const result = await blogController.getById(req.params.id, req.body);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  checkRole(["admin", "user"]),
  validate,
  async (req, res, next) => {
    try {
      req.body.author= req.body.author || req.currentUser;
      const result= await blogController.create(req.body);
      res.json({ data: result });
    } catch (err) {
      next(err);
    }
  }
);

router.put("/:id", checkRole(["admin", "user"]), async (req, res, next) => {
  try {
    // const { id } = req.params;
    // const data = req.body;
    // console.log({ id, data });
    // res.json({ msg: "hello from put blog router" });
    const result = await blogController.updateById(req.params.id, req.body);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", checkRole(["admin", "user"]), async (req, res, next) => {
  try {
    //   const { id } = req.params;
    // const data = req.body;
    // console.log({ id, data });
    // res.json({ msg: "hello from put blog router" });
    const result = await blogController.updateById(req.params.id, req.body);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", checkRole(["admin", "user"]), async (req, res, next) => {
  try {
    // const { id } = req.body;

    // console.log(req.params.id);
    // res.json({ msg: "hello from blog router" });
    const result = await blogController.removeById(req.params.id);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
