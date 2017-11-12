var roleHarvester = require('role.harvester');

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        checkenergy('builder', creep)

        if(creep.memory.acting) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else { 
                roleHarvester.run(creep);
            }
        }
        else { harvest(creep); }
    }
};

module.exports = roleBuilder;