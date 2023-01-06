console.log("Page Loaded script.js");

var website = "https://codingforeverybody.com/";
var studentName = "Arlo Jackson";
console.log(studentName);

// Const cannot be changed NEVER be changed, let can be rewritten

let apples = 4;
const height = "5'9\"";
//   console.log("i have", apples, "apples.");
//  console.log("I am", height);
  
// let cats = 3;
/*const seniorCat = "lils";
const kitten = "onyx"; 
console.log ( "I have", cats ,"cats");*/

// console.warn(" Youngest is", kitten)
//JavaScript Data types
// let profession = "Student";

const str ="A String"; // String
const num =4; // number
const flt = 2.14; //float
const bool = true; //or false
const list =["item 1", 2, "three", 4.25, []]; // array=list
const thing = null; //Nothing in it
const notDefined = undefined; //Currently nothing in it, but can.
const getAge = function() {return 17;} // This is  a function, allows us to use getAge a lot.
const obj = {
    'name': 'Arlo',
    'profession': 'Student',
}// Can be accessed with obj['name]

//Conditional Statements
const age = 17;
if( age >= 16) {
    console.log("I can get a job");
}
if( age >= 21) {
    console.log("I can drink.")
} else { 
    console.log(" Not old enough to drink")
}
const name= "Arlo";
if(name == "Nathan"){
    console.log("welcome, Nathan!")
} else if (name == "Arlo"){
    console.log("Hello Arlo!")
}
  

document.getElementById("demo").innerHTML = "Data Structures " + str + num + flt;