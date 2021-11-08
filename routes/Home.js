const Router = require('@koa/router')()
const jwt = require('jsonwebtoken');

Router.get("/",(ctx)=>{
	// create token here
	var token = jwt.sign({foo:"secret"},"supersecret",{expiresIn:'30s'})
	ctx.body = token
})

Router.post("/check",(ctx)=>{
	id =  ctx.request.header['auth']
	if(!id){
		ctx.body = "no id found"
	}
	var check = jwt.verify(id,'supersecret',(err,decode)=>{
		if(err){
			ctx.response.body = "erorr token"
			console.log("error TOken")
		}
		else{
			console.log("your token is true")
			ctx.response.body = "success login , True"
		}
	})
})
module.exports = Router