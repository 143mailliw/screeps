//Global Settings
global["spawnmethod"] = 0; //0 for william341's method 1 for Derpy's method
global["typesenabled"] =
  {
    "soldier":true,
    "builder":true,
    "upgrader":true,
    "repairman":true,
    "healer":true,
    "harvester":true
  };
global["bodies"] =
  {
    "soldier":[WORK, CARRY, MOVE, ATTACK, ATTACK],
    "builder":[WORK, WORK, CARRY, CARRY, MOVE, MOVE],
    "upgrader":[WORK, WORK, CARRY, CARRY, MOVE],
    "repairman":[WORK, WORK, CARRY, MOVE, MOVE],
    "healer":[WORK, CARRY, MOVE],
    "harvester":[WORK, CARRY, MOVE],
  };
global["autoroad"] = true;
global["autosafemode"] = true;
global["showstatus"] = true;

//william341 method settings
global["method0_amounts"] =
  {
    "soldier":3,
    "builder":3,
    "upgrader":5,
    "repairman":3,
    "healer":3,
    "harvester":10
  };
global["method0_statusmessages"] = true;

//Derpy method settings
global["method1_max"] = 10000
global["method1_statusmessages"] = true;
