//Global Settings
global["spawnmethod"] = 1; //0 for william341's method 1 for Derpy's method
global["typesenabled"] =
  {
    "builder":true,
    "harvester":true,
    "upgrader":true,
    "repairman":true,
    "soldier":true,
    "healer":false
  };
global["bodies"] =
  {
    "builder":[WORK, WORK, CARRY, CARRY, MOVE, MOVE],
    "harvester":[WORK, WORK, CARRY, MOVE, MOVE, MOVE],
    "upgrader":[WORK, WORK, WORK, CARRY, CARRY, MOVE],
    "repairman":[WORK, WORK, CARRY, MOVE, MOVE, MOVE],
    "soldier":[WORK, CARRY, MOVE, ATTACK, ATTACK],
    "healer":[WORK, CARRY, MOVE]
  };
global["autoroad"] = true;

//william341 method settings
global["method0_amounts"] =
  {
    "builder":3,
    "harvester":5,
    "upgrader":5,
    "repairman":3,
    "soldier":3,
    "healer":3
  };
global["method0_statusmessages"] = true;

//Derpy method settings
global["method1_max"] = 10000
global["method1_statusmessages"] = true;
global["autosafemode"] = false;