
// var playerName = user input based ; //
var playerName = window.prompt("What is your robot champion's name?");
var playerHealth = 100;
var playerAttack = 60;
var playerMoney = 100;

// you can log multiple values at once // 
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Recycle-Ben", "Unsolved Paul", "Copper FE-Droid No. 29348", "Trick-man Stick-man"];
var enemyHealth = 50;
var enemyAttack = 12;

// the FIGHT function // 
var fight = function(enemyName) {
    // if player is still alive, notify player of what round they are in // 
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
    
    
    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting a new fight // 
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at the moment in
    // the code
    // debugger 

    // pass the pickedEnemyName variable's value into the fight function, 
    // where it will assume the value of the enemyName parameter 
    fight(pickedEnemyName);
  




  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // let player know about their award money amount and how much they now have
      // window.alert(playerName + 'has won this round! You received ' + playerMoney + 20 + '. You now have' + playerMoney;)

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



// run fight function to start game
//fight();

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}