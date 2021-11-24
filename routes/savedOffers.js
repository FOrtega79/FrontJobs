const router = require("express").Router();
const axios = require("axios");
const Offers = require("../models/Offers.model");
const User = require("../models/User.model");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", async (req, res, next) => {

    const user = req.session.user

    try{

        const userData = await User.findById(user._id).populate('savedOffers')

        res.render("users/profile", { favOffers : userData.savedOffers , user  })

    }catch(err){
       console.log(err.message)
    }


  //     try{
  //     const axiosCall = await axios(`http://api.adzuna.com/v1/api/jobs/es/search/1?app_id=2b6742ea&app_key=${process.env.API_KEY}&results_per_page=5&what=front%20end`)

  //     const infoSavedOffer = axiosCall.data.results

  //         console.log(infoSavedOffer)

  //         const offer = {
  //             title: infoSavedOffer[0].title,
  //             company:infoSavedOffer[0].company.display_name,
  //             description:infoSavedOffer[0].description,
  //             location:infoSavedOffer[0].location.display_name,
  //             redirect_url:infoSavedOffer[0].redirect_url,

  //         }
  //     console.log(offer)

  //    const newOffer = await Offers.create(offer)
  //    console.log(newOffer)

  //     res.render("savedOffers", { infoSavedOffer })

  //     }catch(err){
  //     console.log("Saved Offer error is...", err)
  //     }
});

router.post("/saveOffer", async (req, res, next) => {

    const {title,description,location,redirect_url} = req.body;

    console.log(req.session)
    const userId = req.session.user._id

    const offer = {
      title,
      // company: infoSavedOffer[0].company.display_name,
      description,
      location,
      redirect_url,
    };
  
    try{
      const newOffer = await Offers.create(offer)

      const updatedUser = await User.findByIdAndUpdate(userId, {$push:{savedOffers: newOffer._id}})

  
      
      res.redirect('/savedOffers')

    }catch(err){
        console.log(err.message)
     }

});



module.exports = router;
