const router    = require("express").Router();
const axios     = require("axios")
const Offers    = require("../models/Offers.model")
const API_ID    = "2b6742ea"
const API_KEY   = "e17ef6ea7b29a60500f7dd33043d2565"


/* GET offers page */
router.get("/", async (req, res, next) => {
  try{
      const axiosCall = await axios(
          "http://api.adzuna.com/v1/api/jobs/es/search/1?app_id=2b6742ea&app_key=e17ef6ea7b29a60500f7dd33043d2565&results_per_page=10&what=front%20end"
      )
      const offersInfo = axiosCall.data.results
        console.log(offersInfo)
  res.render("offers" , { offersInfo });  

  }catch(err){
      console.log("The Error here is: ", err)
  }
  
    
});

module.exports = router;

