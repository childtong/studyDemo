const Sequelize = require('sequelize')
const UserModel = require('./model/user')

const sequelize = new Sequelize('li','root','root',{
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('start')
}).catch(()=>{
    console.log('error!')
})
const user = UserModel(sequelize,Sequelize.DataTypes)
//const mysql2=require('mysql2')