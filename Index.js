// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// global.document = new JSDOM.window.document;

const name = document.getElementById("name").value;
const rollno = document.getElementById("rollno").value;
const section = document.getElementById("section").value;
const gender = document.getElementById("gender").value;
const createData = document.getElementById("create");
const readData = document.getElementById("read");
const updateData = document.getElementById("update");
const deleteData = document.getElementById("delete");


var http = require('http');

var server = http.createServer(function(req, res){



// import { initializeApp } from "firebase/app";
// // Import the functions you need from the SDKs you need
//
// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD5fTC5a7iuxYvhWpmhEPt6p1hClaa31hc",
//     authDomain: "fir-js-30160.firebaseapp.com",
//     projectId: "fir-js-30160",
//     storageBucket: "fir-js-30160.appspot.com",
//     messagingSenderId: "294794614577",
//     appId: "1:294794614577:web:ddc89dcdbe5338fe170210"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// product code


//---------------Create Function---------------
create.addEventListener("click", () => {
  console.log("function is running");
  firebase.database().ref('Student/'+rollno).set({
    NameOfStudent: name,
    RollNoOfStudent: rollno,
    SectionOfStudent: section,
    GenderOfStudent: gender
  });
});


});

server.listen(5000);
console.log("Node server is running at 5000");
