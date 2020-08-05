const Sequelize = require('sequelize')

const sequelize = new Sequelize('li','root','root',{
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('start')
}).catch(()=>{
    console.log('error!')
})
//const mysql2=require('mysql2')