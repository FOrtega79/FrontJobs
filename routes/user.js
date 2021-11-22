const router = require("express").Router();

/* GET user profile */
router.get("/profile", (req, res, next) => {
    //La sesión exista
    const user = req.session.user
    res.render("users/profile", {user});
});

module.exports = router;