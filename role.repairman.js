var roleUpgrader = require('role.upgrader');

var roleRepairman = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
            creep.say('⚡ repair');
        }

        if(creep.memory.repairing) {
            let structuresToRepair = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => ((structure.structureType === STRUCTURE_CONTAINER || structure.structureType === STRUCTURE_ROAD) || structure.my) && structure.hits < structure.hitsMax
            });
            if(!structuresToRepair.length) {
                roleUpgrader.run(creep);
            }
            else if(creep.repair(structuresToRepair[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(structuresToRepair[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleRepairman;