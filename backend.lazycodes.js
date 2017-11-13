/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('backend.lazycodes');
 * mod.thing == 'a thing'; // true
 */

global["defbodycreate"] = function(spawn, nametouse, role) {
    if(role == 'soldier'){
        Game.spawns[spawn].spawnCreep( [WORK, CARRY, MOVE, ATTACK, ATTACK], nametouse,{ memory: { role: role } } );
    }else if(role == 'harvester'){
        Game.spawns[spawn].spawnCreep( [WORK, CARRY, MOVE], nametouse,{ memory: { role: role } } );
    }else{
        Game.spawns[spawn].spawnCreep( [WORK, CARRY, MOVE], nametouse,{ memory: { role: role } } );
    }
}

global["checkifexists"] = function(role, amount, spawn) {
    var newName = role + Game.time;
    console.log('Spawning new ' + role + ': ' + newName);
    defbodycreate("Spawn1", newName, role);
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



module.exports = {

};