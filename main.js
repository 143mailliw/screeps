var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairman = require('role.repairman');
var roleSoldier = require('role.soldier');
var roleHealer = require('role.healer');
require('backend.lazycodes');
require('backend.config');
module.exports.loop = function () {

  for(var name in Memory.creeps) {
      if(!Game.creeps[name]) {
          delete Memory.creeps[name];
          console.log('Clearing non-existing creep memory:', name);
      }

  }

  if(spawnmethod == 0) {
    method0_spawn();
  }
  else if(spawnmethod == 1) {
    method1_spawn();
  }
  else {
    method0_spawn();
  }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(randomint(0,1000)==10 && autoroad == true){
            creep.room.createConstructionSite(creep.pos.x, creep.pos.y, STRUCTURE_ROAD);
            
        }
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairman') {
            roleRepairman.run(creep);
        }
        if(creep.memory.role == 'soldier') {
            roleSoldier.run(creep);
        }
        if(creep.memory.role == 'healer') {
            roleHealer.run(creep);
        }
    }
}
