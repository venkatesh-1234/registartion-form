var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "securifi@123",
    database : 'Registration_Details'
  });
  con.connect(function(err) {
if (err) throw err;
    console.log("database Connected!");
  });
  var sqldata={};
sqldata.send=function(data){
    //console.log("database Connected!");
    var sql = "INSERT INTO users_details(username,email,password,phone,confirmpassword) VALUES (?,?,?,?,?) ";
    con.query(sql,[data.username,data.email,data.password,data.phone,data.confirmpass], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    }); }
  sqldata.searchuser=function(value,callback){
    con.query("select * from users_details WHERE username= ?",value ,function (err, result, fields) {
      if (err) throw err;
      callback(result)
    });
  }
module.exports = sqldata;