var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        checkenergy('upgrade', creep)

        if(creep.memory.acting) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else { harvest(creep); }
    }
};

module.exports = roleUpgrader;