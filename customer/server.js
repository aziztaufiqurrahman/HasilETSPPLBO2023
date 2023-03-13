const express = require("express");
const app = express();

const port = 8083;

app.get("/customer", (req,res)=>{
    let response = {
        data: {
            customer: [
                {
                    id: 1,
                    name: 'Ahmad',
                    email: 'ahmad@gmail.com',
                    phone: '08123456789',
                    address: 'Jl. Raya No. 10'
                },
                {
                    id: 2,
                    name: 'Budi',
                    email: 'budi@gmail.com',
                    phone: '08123456788',
                    address: 'Jl. Gajah Mada No. 20'
                },
                {
                    id: 3,
                    name: 'Charlie',
                    email: 'charlie@gmail.com',
                    phone: '08123456787',
                    address: 'Jl. Merdeka No. 30'
                }
            ]
        }
    };
    res.status(200).json(response);
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
});
