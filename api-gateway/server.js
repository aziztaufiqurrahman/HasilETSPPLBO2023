const express = require("express");
const gateway = require("fast-gateway");

const port = 9001;
const server = gateway({
    routes: [
        {
            prefix: "/order",
            target: "http://localhost:8081/",
            hooks: {}
        },
        {
            prefix: "/payment",
            target: "http://localhost:8082/",
            hooks: {}
        },
        {
            prefix: "/customer",
            target: "http://localhost:8083/",
            hooks: {}
        },
        {
            prefix: "/inventory",
            target: "http://localhost:8084/",
            hooks: {}
        },
        {
            prefix: "/menu",
            target: "http://localhost:8085/",
            hooks: {}
        },
        {
            prefix: "/reporting",
            target: "http://localhost:8086/",
            hooks: {}
        },
        {
            prefix: "/kitchen",
            target: "http://localhost:8087/",
            hooks: {}
        },
        {
            prefix: "/delivery",
            target: "http://localhost:8088/",
            hooks: {}
        }
    ]
});

server.get('/mytesting', (req,res)=> {
    res.send("Gateway Called with GET method");
})

server.post('/mytesting', (req,res)=> {
    res.send("Gateway Called with POST method");
})

server.start(port).then(server=>{
    console.log("Gateway is running "+port);
})
