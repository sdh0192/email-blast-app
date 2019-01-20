const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// clientID 930343641316-pb71lju89gtnac9ls95o5t27tsefgc5t.apps.googleusercontent.com
// client secret Bu8IPjQtnZrrYp1SW8c69Dga
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000
app.listen(PORT);


