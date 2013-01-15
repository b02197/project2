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
var readyCheck = true
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
        console.log("Awsome only " + rollersForMount + " rollers for the mount. Let's see if everyone know the fight.")}
        else if (rollersForMount > 5){
        console.log("Oh man. With " + rollersForMount + " rollers. It looks like I might not get my mount tonight. Well let's see if everyone knows the fight.")}
    };
getRollers(4);        
        
    
    
        
//boolean expression
var getKnowFight = function(result){
    var y = true, n = true;
    var fightCheck = y &&((n && y) || n);
    var results = fightCheck, comment;
    if (results === true) { fightCheck = "True"; }
    else if (results === false) { fightCheck = "false"; }
  
    return results;
};

//returned value output

var fullComment = getKnowFight()
if (fullComment === true){
console.log("It looks like the check to see if everyone knows the fight can back " + fullComment + ".");
console.log("Go ahead and pull" + coLeader)

}else{
    //Fight explaination for false
console.log("It looks like someone doesn't know the fight. The check for knowing the fight came back " + fullComment + ".");
console.log("Ok" + boss + " has three phases. Phase one will be a simple ground phase. Phase 2 is a sky phase.");
console.log("In this phase range dps needs to be on " + boss + " and melee needs to be on " + adds + " control.");
console.log("In phase 3 " + boss + " in back on the ground she will fear so everyone stay away from the " + adds + " caves."); 
console.log("Once we get " + boss + " down we will roll on loot.");
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
