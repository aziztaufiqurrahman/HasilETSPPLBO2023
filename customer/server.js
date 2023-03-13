const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const port = 8083;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let customers = [
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
];

app.get("/customer", (req,res)=>{
    let response = {
        data: {
            customer: customers
        }
    };
    res.status(200).json(response);
});

app.post("/customer", (req, res) => {
    let newCustomer = req.body;
    let lastId = customers.length > 0 ? customers[customers.length - 1].id : 0;
    newCustomer.id = lastId + 1;
    customers.push(newCustomer);
    let response = {
        data: {
            customer: customers
        }
    };
    res.status(200).json(response);
});

app.listen(port, () => {
    console.log("Listening at localhost " + port);
});
