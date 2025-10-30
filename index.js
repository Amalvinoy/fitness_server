//1.import json-server

const jsonServer = require('json-server')

//2.create an instnce of jsonderver

const server = jsonServer.create()

//3.craete a middleware

const middleware = jsonServer.defaults()

//4.create router

const router = jsonServer.router('db.json')

//5
server.use(middleware)
server.use(router)

//6.define port
const PORT=3000 || process.env.PORT

//7.listen
server.listen(PORT,()=>{
    console.log(`json-server running${PORT}`);
    
})