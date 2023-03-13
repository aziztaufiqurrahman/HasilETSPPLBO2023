const express = require("express");
const app = express();

const port = 8084;

app.get("/inventory", (req,res)=>{
    let response = {
        data: {
            inventory: [
                {
                    id: 1,
                    name: 'Beras',
                    stock: 50
                },
                {
                    id: 2,
                    name: 'Telur',
                    stock: 100
                },
                {
                    id: 3,
                    name: 'Ayam',
                    stock: 20
                },
                {
                    id: 4,
                    name: 'Sayur',
                    stock: 30
                }
            ]
        }
    };
    res.status(200).json(response);
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
});
