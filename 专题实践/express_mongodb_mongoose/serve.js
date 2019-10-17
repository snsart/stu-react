const express=require("express");
const mongoose=require("mongoose");

/*mongoose
 *mongoose是一个用来操作mongodb数据库的nodejs库,提供了对mongodb进行增删改查的接口。
 * 安装mongoose:npm install mongoose -save
 * 主要操作有:
 * 1. 连接数据库:mongoose.connect(DB_URL);
 * 2. 监听连接是否成功:mongoose.connection.on('connected',function(){})
 * 3. 创建数据表
 * 4. 对数据表增删改查
 * */

/*连接数据库*/

const DB_URL='';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
	console.log("mongo connect success");
})

/*在数据库中创建数据表User,User中有两个字段：user和age*/

const User=mongoose.model('user',new mongoose.Schema({
	user:{type:String,require:true},
	age:{type:Number,require:true}
}))

/*1. 在表中添加一个数据*/

User.create({
	user:"xiaohua",
	age:12
},function(err,doc){
	if(!err){
		console.log(doc);
	}else{
		console.log(err);
	}
})

/*2. 在表中删除一个age=18的所有数据*/

User.remove({age:18},function(err,doc){
	console.log(doc);
})

/*3. 在表中修改user=xiaoming的年龄*/

User.update({"user":"xiaoming"},{'$set':{age:26}},function(err,doc){
	console.log(doc);
})

/*4.1. 在表中查找user=xiaoming的所有数据*/

User.find({"user":"xiaoming"},function(err,doc){
	console.log(doc);	
})

/*4.2. 在表中查找user=xiaoming的第一个数据*/

User.findOne({"user":"xiaoming"},function(err,doc){
	console.log(doc);	
})


/*express
 * express是一个web服务器框架
 * 安装express使用npm install express --save
 * 启动服务器文件使用:node serve.js
 * 通过nodemon命令启动，可以保证serve.js内容改变后直接重启服务器:node serve.js。安装nodemon使用npm install -g nodemon
 * express的方法有:
 * app.get
 * app.post
 * app.use
 * */

const app=express();
app.get("/",function(req,res){
	res.send('<h1>hello world</h2>')
})
app.get("/data",function(req,res){
	
})
app.listen(9093,function(){
	console.log("node app start at port 9093");
})
