"use strict";

// create base name for mongoDB
const mongooseBaseName = "widget";

// create URI for development
const database = {
  development: `mongodb://127.0.0.1:27017/${mongooseBaseName}-development`,
};

const localDb = database.development;

module.exports = localDb;
