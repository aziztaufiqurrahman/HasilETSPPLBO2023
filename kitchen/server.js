const express = require("express");
const app = express();

const port = 8087;

app.get("/kitchen", (req,res)=>{
    let response = {
        data: {
            kitchen: [
                {
                    id: 1,
                    name: 'Nasi Goreng',
                    status: 'done'
                },
                {
                    id: 2,
                    name: 'Mie Ayam',
                    status: 'in progress'
                },
                {
                    id: 3,
                    name: 'Sate Ayam',
                    status: 'not started'
                },
                {
                    id: 4,
                    name: 'Ayam Goreng',
                    status: 'done'
                }
            ]
        }
    };
    res.status(200).json(response);
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
});
