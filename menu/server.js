const express = require("express");
const app = express();

const port = 8085;

app.get("/menu", (req,res)=>{
    let response = {
        data: {
            menu: [
                {
                    id: 1,
                    name: 'Nasi Goreng',
                    price: 20000
                },
                {
                    id: 2,
                    name: 'Mie Ayam',
                    price: 15000
                },
                {
                    id: 3,
                    name: 'Sate Ayam',
                    price: 25000
                },
                {
                    id: 4,
                    name: 'Ayam Goreng',
                    price: 18000
                }
            ]
        }
    };
    res.status(200).json(response);
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
});
