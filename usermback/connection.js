const mysql=require('mysql2')

const mysqlconnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Amit1234@',
    database:'useradmin'
})
mysqlconnection.connect((err)=>{
    if(err){
        console.log(`Error in database connection `)
    }else{
        console.log('db connect successfully')
    }
})
module.exports = mysqlconnection