var roleUpgrader = require('role.upgrader');

var roleRepairman = {

    /** @param {Creep} creep **/
    run: function(creep) {

        checkenergy('repair', creep)

        if(creep.memory.acting) {
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
        else { harvest(creep); }
    }
};

module.exports = roleRepairman;