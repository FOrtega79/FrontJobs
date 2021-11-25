const router = require("express").Router();
const User = require("../models/User.model");
/* GET user profile */
router.get("/profile", async (req, res, next) => {
  //La sesión exista

  try {
    const userId = req.session.user._id;
    const user = await User.findById(userId).populate("savedOffers");

    res.render("users/profile", { favOffers: user.savedOffers, user });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
