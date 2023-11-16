
// dependencies + ports
const express = require('express'); 
const app = express();
const port = 4000;
const firebase = require("firebase/app");




// config from firebase
const firebaseConfig = {
    apiKey: "AIzaSyDHaO0BaWKt00b82_N6jqJydBzhAuFgREE",
    authDomain: "exercise-five-3dc5f.firebaseapp.com",
    projectId: "exercise-five-3dc5f",
    storageBucket: "exercise-five-3dc5f.appspot.com",
    messagingSenderId: "1050243458508",
    appId: "1:1050243458508:web:48556b1c5e99a418d72969"
  };
// call and init firebase
firebase.initializeApp(firebaseConfig);


// page routes
const indexRoute = require('./routes/index');
const singlePostRoute = require('./routes/singlePost');
const createPostRoute = require('./routes/createPost');

app.use("/", indexRoute);
app.use("/post", singlePostRoute);
app.use("/create", createPostRoute);
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })