const router = require("express").Router();
/* GET logout page */
router.get("/", (req, res, next) => {
  res.render("logout");
});

module.exports = router;