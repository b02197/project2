//alert("JavaScript works!");

//Michael Eaton
//SDI 1301
// Project 2
//

// Variables

var leader = "\"Dragon Slayer\" Lunrshift"
var raidMembers = 10
var coleader = "JohnyB"
var boss = "Onxyia"
var adds = "Whelplings"
var deaths = 3
var wipes = 0
var readyCheck = true
var health = 100

//output

console.log("After we got the required " + raidMembers + ", we are finally ready to go take on " + boss + ".");
console.log(leader + " initiates a Ready Check.");
console.log("The Ready Cheack outputs " + readyCheck + ".");
console.log("Ok" + boss + " has three phases. Phase one will be a simple ground phase. Phase 2 is a sky phase.");
console.log("In this phase range dps needs to be on " + boss + " and melee needs to be on " + adds + " control.");
console.log("In phase 3 " + boss + " in back on the ground she will fear so everyone stay away from the " + adds + " caves."); 
console.log("Once we get " + boss + " too 0% we win and we get loot.");
console.log("Ok we are ready and know the fight so let's get her down.")

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
    
    
    
    
    
//console.log("Woot!!! Good job team! Time to roll for loot.");
