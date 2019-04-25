const express=require('express');
const fs=require('fs')
const path=require('path');
const bodyParser     =         require("body-parser"); 
const resolve=(p)=>path.resolve(__dirname,p)
const crypto = require('crypto');
const uuid=require('node-uuid')
var cryptoPassFunc = function(password) {
  const md5 = crypto.createHash('md5');
  return md5.update(password).digest('hex');
};

var app =express();
//设置跨域访问
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
// res.header("Content-Type", "application/json;charset=utf-8");
   next();
});

//app.use(bodyParser.json({"limit":"50mb"}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
app.use('/image',express.static(resolve('./image')))

function replaceB64(base64Data,i){
	var a=base64Data.replace(/^data:image\/\w+;base64,/,'');
	var type=base64Data.substring(base64Data.indexOf('/')+1,base64Data.indexOf(';'));
	var dataBuffer=new Buffer(a,'base64');
	var name = new Date().getTime();
	var mpath=i+name+'.'+type;
	fs.writeFile(resolve("./image/"+mpath),dataBuffer)
	return {
		type,dataBuffer,name,mpath
	}
}

app.post('/upload',bodyParser.json({limit: '10mb'}),function(req, res){
	var time = new Date().getTime();
	var body=req.body;
	var result=JSON.parse(fs.readFileSync(resolve("./api/zuoping.json")))
	var ImgsPath=[];
	body.imgs.forEach(item=>{
		ImgsPath.push(replaceB64(item,'img').mpath)
	})
	var CoverB64=replaceB64(body.cover,'cover');
	var dataBuffer = CoverB64.dataBuffer;
	body.cover=CoverB64.mpath;
	body.imgs=ImgsPath;
	result.push(body);
	fs.writeFileSync(resolve("./api/zuoping.json"),
		JSON.stringify(result))
	res.json({
		code:0
	})
})
app.post('/zuoping',bodyParser.json({limit: '10mb'}),function(req, res){
	var body=req.body;
	console.log(body.type)
	console.log(body.isqbz);
	var result=JSON.parse(fs.readFileSync(resolve("./api/zuoping.json")))
	res.status(200)
	if(body.type=='all'){
		if(body.isqbz=='true'){
			res.json(result.splice(0,8));
		}else{
			res.json(result);
		}
	}else{
		var arr=[];
		result.forEach((item,index)=>{
			if(item.fenlei==body.type){
				arr.push(item)
			}
		})
		if(body.isqbz=='true'){
			res.json(arr.splice(0,8));
		}else{
			res.json(arr);
		}
	}
})
app.post('/regist',bodyParser.json({limit: '10mb'}),function(req, res){
	var body=req.body;
	var upassword=cryptoPassFunc(body.upassword);
	var uname=body.uname;
	var result=JSON.parse(fs.readFileSync(resolve("./api/user.json")));
	var hasUname;
	result.forEach(item=>{
		if(item.uname==uname){
			res.json({
				code:400,
				msg:'用户名已存在'
			})
			hasUname=true;
		}
	})
	if(!hasUname){
		var uid=uuid.v1();
		result.push({
			uname,upassword,uid
		})
	}
	fs.writeFileSync(resolve("./api/user.json"),
		JSON.stringify(result))
	res.json({
		code:0
	})
})
app.post('/login',bodyParser.json({limit: '10mb'}),function(req,res){
	var body=req.body;
	var upassword=cryptoPassFunc(body.upassword);
	var uname=body.uname;
	var result=JSON.parse(fs.readFileSync(resolve("./api/user.json")))
	result.forEach(item=>{
		if(item.uname==uname){
			if(item.upassword!=upassword){
				return res.json({
					code:400,
					msg:'密码错误'
				})
			}else{
				return res.json({
					code:0,
					msg:'登录成功',
					uid:item.uid
				})
			}
		}
	})
	
})
app.all('/:viewname?', function(req, res) {
	if(req.params.viewname){
		var result=JSON.parse(fs.readFileSync(resolve("./api/"+req.params.viewname+".json")))
		res.status(200)
		res.json(result)
	}else{
		res.json('无数据')
	}
});
var server = app.listen(3334, function () {
	console.log('listening at port 3334')
})