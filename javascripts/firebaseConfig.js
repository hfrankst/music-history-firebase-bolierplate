"use strict";

let firebase = require("firebase/app"),
    fb = require("./fb-getter"),
    fbData = fb();

require("firebase/auth");
require("firebase/database");

var config = {
  apiKey: fbData.apikey,
  databaseURL: fbData.databaseURL,
  authDomain: fbData.authDomain
};

firebase.initializeApp(config);

module.exports = firebase;
