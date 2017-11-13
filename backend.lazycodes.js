/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('backend.lazycodes');
 * mod.thing == 'a thing'; // true
 */
require('backend.config');

global["defbodycreate"] = function(spawn, nametouse, role) {
  Game.spawns[spawn].spawnCreep( bodies[role], nametouse,{ memory: { role: role } } );
}

global["checkifexists"] = function(role, amount, spawn) {
    var screeps = _.filter(Game.creeps, (creep) => creep.memory.role == role);
    console.log(role + 's: ' + screeps.length);
    
    if(screeps.length < amount) {
        var newName = role + Game.time;
        console.log('Spawning new ' + role + ': ' + newName);
        defbodycreate(spawn, newName, role);
    }
}

global["checkspawnstatus"] = function(spawn) {
    if(Game.spawns[spawn].spawning) {
        var spawningCreep = Game.creeps[Game.spawns[spawn].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            spawningCreep.memory.role,
            Game.spawns[spawn].pos.x + 1,
            Game.spawns[spawn].pos.y,
            {align: 'left', opacity: 0.8});
    }
}

global["checkenergy"] = function(actionname, creep) {
    if(creep.memory.acting && creep.carry.energy == 0) {
        creep.memory.acting = false
        creep.say('harvest');
    }
    if(!creep.memory.acting && creep.carry.energy == creep.carryCapacity) {
        creep.memory.acting = true
        creep.say(actionname);
    }
}

global["harvest"] = function(creep) {
    var sources = creep.room.find(FIND_SOURCES);
    if(creep.memory.harvestnode == null) {
        creep.memory.harvestnode = randomint(0, sources.length - 1);
    }
    if(creep.harvest(sources[creep.memory.harvestnode]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[creep.memory.harvestnode], {visualizePathStyle: {stroke: '#ffaa00'}});
    }
}

global["randomint"] = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

global["method1_spawn"] = function() {
  var totals = {
      "builder":0,
      "harvester":0,
      "upgrader":0,
      "repairman":0,
      "soldier":0
  };

  for(var name in Game.creeps) {
      var creep = Game.creeps[name];
      totals[creep.memory.role]++;
  }

  var lowest = "harvester";
  var low = method1_max;

  for(var role in totals){
      if(totals[role]<low && typesenabled[role]){
          low = totals[role];
          lowest = role;
      }

  }

  checkifexists(lowest, method1_max, 'Spawn1');

  if (method1_statusmessages = true) {
    Game.spawns['Spawn1'].room.visual.text(
        "we need "+lowest+"s we only have "+low.toString(),
        Game.spawns['Spawn1'].pos.x + 1,
        Game.spawns['Spawn1'].pos.y,
        {align: 'left', opacity: 0.8});
  }
}

global["method0_spawn"] = function() {
  for(var role in typesenabled) {
    checkifexists(role, method0_amounts[role], "Spawn1");
  }

  if (method0_statusmessages = true) {
    checkspawnstatus("Spawn1");
  }
}

module.exports = {

};
