var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairman = require('role.repairman');
var roleSoldier = require('role.soldier');
require('backend.lazycodes');
module.exports.loop = function () {

    var totals = {
        "builder":0,
        "harvester":0,
        "upgrader":0,
        "repairman":0,
        "soldier":0,
        
    };

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }   
        
    }
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        totals[creep.memory.role]++;
    }
    
    var lowest = "harvester";
    var low = 10000;
    
    for(var role in totals){
        if(totals[role]<low){
            low = totals[role];
            lowest = role;
        }
        
    }
    /*
    checkifexists('builder', 3, 'Spawn1');
    checkifexists('harvester', 5, 'Spawn1');
    checkifexists('upgrader', 5, 'Spawn1');
    checkifexists('repairman', 3, 'Spawn1');
    checkifexists('soldier', 1, 'Spawn1')
    */
    
    checkifexists(lowest, 10000, 'Spawn1');
    
    Game.spawns['Spawn1'].room.visual.text(
        "we need "+lowest+"s we only have "+low.toString(),
        Game.spawns['Spawn1'].pos.x + 1,
        Game.spawns['Spawn1'].pos.y,
        {align: 'left', opacity: 0.8});


    
    //checkspawnstatus("Spawn1");
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
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
    }
}