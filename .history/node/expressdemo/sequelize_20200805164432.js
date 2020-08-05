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
const User = UserModel(sequelize,Sequelize.DataTypes)
User.sync()
//const mysql2=require('mysql2')