const router    = require("express").Router();
const axios     = require("axios")
const Offers    = require("../models/Offers.model")


/* GET offers page */
router.get("/", async (req, res, next) => {
  try{
      const axiosCall = await axios(
          `https://api.adzuna.com/v1/api/jobs/it/search/1?app_id=2b6742ea&app_key=e17ef6ea7b29a60500f7dd33043d2565`
      )
      const offersInfo = axiosCall.data
  res.render("offers" , { offersInfo });  

  }catch(err){
      console.log("The Error here is: ", err)
  }
  
    
});

module.exports = router;

