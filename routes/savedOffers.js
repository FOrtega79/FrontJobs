const router    = require("express").Router();
const axios     = require("axios")
const Offers    = require("../models/Offers.model")

router.post("/", async (req, res, next)=>{

    try{
    const axiosCall = await axios(`http://api.adzuna.com/v1/api/jobs/es/search/1?app_id=2b6742ea&app_key=${process.env.API_KEY}&results_per_page=5&what=front%20end`)
  
    const infoSavedOffer = axiosCall.data.results
        console.log(infoSavedOffer)
        const dataToUpload = {
            title: infoSavedOffer[0].title, 
            company:infoSavedOffer[0].company.display_name, 
            description:infoSavedOffer[0].description, 
            location:infoSavedOffer[0].location.display_name, 
            redirect_url:infoSavedOffer[0].redirect_url, 
            
        }
    console.log(dataToUpload)

   const justCreatedFavOffer = await Offers.create(dataToUpload)
   console.log(justCreatedFavOffer)

    res.render("savedOffers", { infoSavedOffer })
    
    }catch(err){
    console.log("Saved Offer error is...", err)
    }
  })

module.exports = router;