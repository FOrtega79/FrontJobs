// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const projectName = "FrontJobs.com";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} your FrontEnd Jobs`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

const offers = require("./routes/offers")
app.use("/offers", offers)

const savedOffers = require("./routes/savedOffers")
app.use("/savedOffers", savedOffers)

const companies = require("./routes/companies")
app.use("/companies", companies)

const users = require("./routes/user")
app.use("/user", users)



const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
