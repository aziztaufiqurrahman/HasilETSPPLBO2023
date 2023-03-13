const express = require("express");
const app = express();

const port = 8087;

app.use(express.json()); // enable JSON body parsing

let kitchen = [ // define the kitchen array
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
];

app.get("/kitchen", (req,res)=>{
    let response = {
        data: {
            kitchen: kitchen
        }
    };
    res.status(200).json(response);
});

app.post("/kitchen", (req, res) => {
    const { name, status } = req.body; // get name and status from request body
    const id = Math.floor(Math.random() * 100) + 1; // generate random ID

    // create a new object with the provided properties
    const newItem = {
        id,
        name,
        status
    };

    // add the new item to the kitchen array
    kitchen.push(newItem);

    // send a success response with the updated kitchen array
    res.status(200).json({
        message: 'Item added to kitchen',
        data: {
            kitchen
        }
    });
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
});
