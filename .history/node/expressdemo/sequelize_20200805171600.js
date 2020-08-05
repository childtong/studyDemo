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

// User.sync()
//     .then(()=>{
//         return User.bulkCreate([
//             {
//                 id:'1',
//                 username:'test1',
//                 password:'123456',
//                 userId:'1111111222222222222224444411'
//             },
//             {
//                 id:'2',
//                 username:'test1',
//                 password:'123456',
//                 userId:'1111111222222222224542244444'
//             },
//             {
//                 id:'3',
//                 username:'test1',
//                 password:'123456',
//                 userId:'1111111222222222552222244444'
//             }
//         ])
//     })
// User.findOne({
//     raw:true,
//     where:{
//         id:3
//     }
// }).then(res=>{
//     console.log(res)
// })
