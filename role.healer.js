var roleUpgrader = require('role.upgrader');

var roleHealer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        checkenergy('heal', creep);
        var wounded = creep.room.find( Game.MY_CREEPS, {
            filter: function(object) {
                return ( object.hits < object.hitsMax );
        } } );
        if(creep.memory.acting) {
            if(wounded.length){
                if(creep.heal(wounded[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(wounded[0],{visualizePathStyle: {stroke: '#ff0000'}});
                }
            }
            else { 
                roleUpgrader.run(creep);
            }
        }
        else {
            harvest(creep);
        }
    }
};

module.exports = roleHealer;
