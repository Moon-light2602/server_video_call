const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const http = require("http");
const { hrtime } = require("process");
const { error } = require("console");
const server = http.createServer(app);
const {initMeetingServer} = require("./meeting-server");

const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'metting_app';
const client = new MongoClient(url, 
    { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
  .then(() => {
    console.log('Connected to the database');
    const db = client.db(dbName);
  })
  .catch(err => {
    console.error('Error connecting to the database', err);
  });

// initMeetingServer(server);

// mongoose.Promise = global.Promise;
// mongoose.connect(MONGO_DB_CONFIG.DB, {
//     useNewUrlParser: true,
//     useUnifieldTopology: true
// })
// .then(() => {
//     console.log("Database Connected");
// }, (error) => {
//     console.log("Database Can't Be Connect");
// });

// app.use(express.json());
// app.use("/api", require("./routes/app.routes"));

// server.listen(process.env.port || 4000, function () {
//     console.log("Ready To Go!!!");
// });