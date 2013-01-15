//alert("/*JavaScript works!");

//Michael Eaton
//SDI 1301
//Project 2


//Variables

var leader = "\"Dragon Slayer\" Lunrshift"
var raidMembers = 10
var coleader = "JohnyB"
var boss = "Onxyia"
var adds = "Whelplings"
var wipes = 0
var readyCheck = true
var health = 100

//output

console.log("After we got the required " + raidMembers + ", We are finally ready to go take on " + boss + ".");
console.log("Going to see if everyone is hear.")
console.log(leader + " initiates a Ready Check.");
console.log("The Ready Cheack outputs " + readyCheck + ".");

// True Procedure
if (readyCheck === true) {
    console.log("Ok we are ready and know the fight so let's get her down.");
    
 
//boolean expression
var getKnowFight = function(result){
    var y = true, n = true;
    var fightCheck = y && ( n || y);
    var results = fightCheck, comment;
    if (results === true) { fightCheck = "True"; }
    else if (results === false) { fightCheck = "false"; }
  
    return results;
};

var fullComment = getKnowFight()
console.log("It looks like the check to see if everyone knows the fight can back " + fullComment + ".");

    
 
 
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

}else{
    
//False Procedure
console.log("OK. Whats the hold up " + coleader + "? Why did you hit " + readyCheck + "?")
};



//console.log("Woot!!! Good job team! Time to roll for loot.");
