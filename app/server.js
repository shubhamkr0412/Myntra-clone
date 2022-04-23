const jsonServer=require("json-server");
const server=jsonServer.create();
const router=jsonServer.router("./db.json");
const middlewares=jsonServer.defaults({
    static:"/build"
})
const port=process.env.Port || 3005;
server.use(middlewares)(
    jsonServer.rewriter({
        "/api/*":"/$1"
    })
   
);
server.use(router);
server.listen(port,()=>{
    console.log("Server is rrunning");
})