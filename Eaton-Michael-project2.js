//alert("JavaScript works!");

//Michael Eaton
//SDI 1301
// Project 2
//

// Variables

var leader = "\"Dragon Slayer\" Lunrshift"
var raidMembers = 8
var coleader = "JohnyB"
var boss = "Onxyia"
var adds = "Whelplings"
var wipes = 0
var readyCheck = true
var health = 100
var requiredRaiders = 10

//output

console.log("After we got the required " + raidMembers + ", We are finally ready to go take on " + boss + ".");
console.log("Ok" + boss + " has three phases. Phase one will be a simple ground phase. Phase 2 is a sky phase.");
console.log("In this phase range dps needs to be on " + boss + " and melee needs to be on " + adds + " control.");
console.log("In phase 3 " + boss + " in back on the ground she will fear so everyone stay away from the " + adds + " caves."); 
console.log("Once we get " + boss + " too 0% we win and we get loot.");
console.log(leader + " initiates a Ready Check.");
console.log("The Ready Cheack outputs " + readyCheck + ".");

// If true
if (readyCheck === true) {
    console.log("Ok we are ready and know the fight so let's get her down.");
    
 }else{
    
//False statment
if(readyCheck === false){
    console.log("OK. Whats the hold up " + coleader + "? Why did you hit " + readyCheck + "?")
    }
};
    
//while loop 75%

while (health > 75) {
    console.log("She is down to " + health + "% health.");
    health-=5;
};
    console.log(boss + " down to " + health + " health. She is lifting off.");   
     


    
    
    
//While loop 50%

while (  health > 50) {
    console.log("she id down to" + health + " % health.");
     health-=5;
};
    
    console.log("She is down to" + health + "% health. She is landing.");

    
//For loop

for (var health = 100; health > 0; health-=5) {
    console.log("She is down to " + health + "% health.");
    
};


// boolean expression

var p = true, q = false, r = false;

    console.log("the fight is " + ((p&&q) || r));

    console.log( p &&(q || r));

    console.log((p && !q) || (q && r));

    console.log(!(p ||r));

//array

var members = ["Bluphonex", "Skybrook", "bratt"];

   for (var i=0; i< members.length; i++){
    
    console.log(members[i] + " has died.");
    };

    console.log("Oh No! We have " + members.length + " raiders died.");

    console.log("How did you guys die?");
    
var respons = [
    "got feared into whelp cave.",
    "got hit with fire breath.",
    "got hit with tail swipe."
];
for (var i=0, j=members.length; i <j; i++) {
console.log(members[i] + " " + respons[i]);

};



//console.log("Woot!!! Good job team! Time to roll for loot.");
