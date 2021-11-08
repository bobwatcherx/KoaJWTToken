const koa = require('koa')
const router = require('@koa/router')();
const koaBody = require('koa-body')
const app = new koa()
const Home = require('./routes/Home.js')


app.use(Home.routes())
app.use(router.routes());
app.use(router.allowedMethods())
app.listen(3000,()=>console.log("server on 3000"))



