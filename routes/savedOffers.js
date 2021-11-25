const router = require("express").Router();
const axios = require("axios");
const Offers = require("../models/Offers.model");
const User = require("../models/User.model");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

// GET info from the DB and render in the user profile
router.get("/", async (req, res, next) => {
  const user = req.session.user;
  try {
    const userData = await User.findById(user._id).populate("savedOffers");
    res.render("users/profile", { favOffers: userData.savedOffers, user });
  } catch (err) {
    console.log(err.message);
  }
});

// POST API info to the DB and assign to the user
router.post("/saveOffer", async (req, res, next) => {
  const { title, description, location, redirect_url } = req.body;

  console.log(req.session);
  const userId = req.session.user._id;

  const offer = {
    title,
    // company: infoSavedOffer[0].company.display_name,
    description,
    location,
    redirect_url,
  };

  try {
    const newOffer = await Offers.create(offer);

    const updatedUser = await User.findByIdAndUpdate(userId, {
      $push: { savedOffers: newOffer._id },
    });

    res.redirect("/savedOffers");
  } catch (err) {
    console.log(err.message);
  }
});


// Delete a Favorited Offer ----------------------------------------------
router.post('/deleteOffer', async(req,res) => {

  try {
    const {offerId} = req.body
    const deletedOffer = await Offers.findByIdAndDelete(offerId, { new: true });
    res.redirect('/user/profile')
  } catch (err) {
    console.log("Error at DELETE: ", err);
  }
})





module.exports = router;
