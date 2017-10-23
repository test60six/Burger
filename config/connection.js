var mysql=require("mysql");
var connection= mysql.createConnection({
host: "localhost",
port: 3000,
user: "root",
password:"Wired410",
database:"burgers_db"
});

connection.connect(function(err){
	if(err){throw err;
		}
	
		console.log("connect as id " + connection.threadId);
});
