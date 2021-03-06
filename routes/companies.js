const router    = require("express").Router();
const axios     = require("axios")
const Companies    = require("../models/Company.model")
const API_ID    = "2b6742ea"
const API_KEY   = "e17ef6ea7b29a60500f7dd33043d2565"


/* GET top companies page */
router.get("/", async (req, res, next) => {
  try{
      const axiosCall = await axios(
          `https://api.adzuna.com/v1/api/jobs/es/top_companies?app_id=2b6742ea&app_key=${process.env.API_KEY}&what=full%20stack`
      )
      const CompaniesInfo = axiosCall.data.leaderboard
  res.render("companies" , { CompaniesInfo });  

  }catch(err){
      console.log("The Error here is: ", err)
  }
});


module.exports = router;