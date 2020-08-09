module.exports = function(sequelize,dataTypes){
    return sequelize.afterDefine('User',{
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:dataTypes.INTEGER
        },
        username:{
           type:dataTypes.CHAR(255),
           allNull:false
        },
        password:{
            type:dataTypes.CHAR(255),
            allNull:false
         },
         userId:{
            type:dataTypes.CHAR(36),
            allNull:false
         }
    },{
        sequelize,
        modelName:'User'
    })
}