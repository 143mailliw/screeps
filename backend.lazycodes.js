/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('backend.lazycodes');
 * mod.thing == 'a thing'; // true
 */

global["defbodycreate"] = function(spawn, nametouse, role) {
   Game.spawns[spawn].spawnCreep( [WORK, CARRY, MOVE], nametouse,{ memory: { role: role } } );
}

global["checkifexists"] = function(role, amount, spawn) {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == role);
    console.log(role + 's: ' + harvesters.length);

    if(harvesters.length < amount) {
        var newName = role + Game.time;
        console.log('Spawning new ' + role + ': ' + newName);
        Game.spawns[spawn].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: role}});
    }
}

global["checkspawnstatus"] = function(spawn) {
    if(Game.spawns[spawn].spawning) {
        var spawningCreep = Game.creeps[Game.spawns[spawn].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns[spawn].pos.x + 1,
            Game.spawns[spawn].pos.y,
            {align: 'left', opacity: 0.8});
    }
}

module.exports = {

};