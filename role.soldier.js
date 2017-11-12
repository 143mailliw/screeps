var roleHarvester = require('role.harvester');

var roleSoldier = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.carry.energy == 0) {
            creep.say('harvest');
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        if(creep.carry.energy == creep.carryCapacity) {
            creep.say('attack');
        }
        var enemies = creep.room.find(Game.HOSTILE_CREEPS);
        if(!(enemies[0] == null)){
            creep.moveTo(enemies[0],{visualizePathStyle: {stroke: '#ff0000'}});
            creep.attack(enemies[0]);
        }

    /*
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ff0000'}});
            }
        }*/
    }
};

module.exports = roleSoldier;
