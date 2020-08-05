const { Sequelize } = require("sequelize/types")

module.exports = function(sequelize,dataTypes){
    return Sequelize.afterDefine('User',{
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:dataTypes.INTEGER
        }

    })
}