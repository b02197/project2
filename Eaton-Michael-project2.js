//alert("/*JavaScript works!");

//Michael Eaton
//SDI 1301
//Project 2


//Variables

var leader = "\"Dragon Slayer\" Lunrshift"
var raidMembers = 10
var coLeader = "JohnyB"
var boss = "Onxyia"
var adds = "Whelplings"
var wipes = 0
var health = 100

//output

console.log("After we got the required " + raidMembers + ", We are finally ready to go take on " + boss + ".");
console.log("Going to see if everyone is hear.")
console.log(leader + " initiates a Ready Check.");


//Procedure
console.log("How many people are here for the mount drop?")
    var getRollers= function(r){
        var rollersForMount = r + 1;
        if (rollersForMount <= 5){
        console.log("Awsome only " + rollersForMount + " rollers for the mount.")}
        else if (rollersForMount > 5){
        console.log("Oh man. With " + rollersForMount + " rollers. It looks like I might not get my mount tonight.")}
    };
getRollers(4);        
        
    

    
        
//boolean expression
console.log("Let's see if everyone know this fight.")
var getKnowFight = function(result, comment){
    var y = true, n = false;
    var fightCheck = y &&((n && y) || n);
    if (fightCheck === true) { result = "True"; comment = "It looks like the check to see if everyone knows the fight can back " + fightCheck + "."; }
    else if (fightCheck === false) { result = "false"; comment = "It looks like someone doesn't know the fight. The check for knowing the fight came back " + fightCheck + "."; }
  
    return result, comment;
};

//returned value output

var fullComment = getKnowFight();
console.log(fullComment);

console.log("it's a easy fight. i'm sure you can figure it out.");




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
