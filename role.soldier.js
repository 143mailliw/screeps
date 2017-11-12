var roleHarvester = require('role.harvester');

var roleSoldier = {

    /** @param {Creep} creep **/
    run: function(creep) {
        checkstatus('fight', creep);
        var enemies = creep.room.find(Game.HOSTILE_CREEPS);
        if(creep.memory.acting) {
            if(!enemies){
                if(creep.attack(enemies[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(enemies[0],{visualizePathStyle: {stroke: '#ff0000'}});
                }
            }
            else { 
                roleHarvester.run(creep);
            }
        }
        else {
            harvest(creep);
        }
    }
};

module.exports = roleSoldier;
