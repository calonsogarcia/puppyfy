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
// Require handlebars and just-handlebars-helpers
const H = require('just-handlebars-helpers');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const projectName = "puppyfy";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// Register just-handlebars-helpers with handlebars
H.registerHelpers(hbs);

hbs.registerHelper('compareIds', function(lvalue, rvalue, options) {
  if (arguments.length < 3) {
    throw new Error("Handlebars Helper equal needs 2 parameters");
  }
  if(JSON.stringify(lvalue)!=JSON.stringify(rvalue)) {
      return options.inverse(this);
  } else {
      return options.fn(this);
  }
});

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes)

const profileRoutes = require("./routes/profile.routes");
app.use("/profile", profileRoutes)

const serviceRoutes = require("./routes/service.routes");
app.use("/puppy-care", serviceRoutes)

const puppiesRoutes = require("./routes/puppies.routes");
app.use("/adopt", puppiesRoutes)


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;