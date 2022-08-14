// // window.alert("This is an alert! JavaScript is running!");
// // You cannot continue with anything until an alert is dismised, useful for passsword creation assignment

// // This is making the fight function
// function fight() {
//     window.alert("The Fight Has Begun!");
// }


// // promting the player to add something to the game
// // adding var allows the input to be stored and used later
// var playerName = window.prompt("What is your robot's name?");

// console.log(playerName);

// // console.log("This logs a string, good for leaving yourself a message");
// // console.log(10+10);
// console.log("Our robot's name is " + playerName);

// // robot ready for battle
// console.log(playerName + " is ready for battle!");

// // When your robot wins

// console.log("Your robot, " + playerName + ", has won!");

// var name="Your Name";
// console.log(name);

var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
// creating conditions so you know when it is over and who wins
if (playerHealth > 0) {
    console.log("Your player is still alive andd fighting!");
}
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// subtract attack from health for both enemy and player
// log a message to show the attack was successful
var fight = function() {
    // showing that we are starting the battle
    window.alert("Welcome to Robot Gladiators!");

    // Alert about if you want to battle or not
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'Skip' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check health of enemy and alert IF dead
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left!");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check health of enemy and alert IF dead
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left!");
    }

} else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    //confirm the skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes leave the fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
    }
    else {
        fight();
    }
} else {
    window.alert("Your need to choose a valid option. Try Again!");
    }
}

    
//execute the function
fight();