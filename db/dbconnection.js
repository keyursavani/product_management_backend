const mysql = require("mysql");
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
const mysqlconnection = mysql.createConnection({
  host:"127.0.0.1",
  user:'root',
  password:"keyur2111",
  database:'iacsd0924',
  port:3306
});

mysqlconnection.connect((err)=>{
 if(!err){
  console.log("connection done");
 }else{
  console.log("connection fail "+JSON.stringify(err))
 }
})

module.exports = mysqlconnection;