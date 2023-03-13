const express = require("express");
const app = express();

const port = 8082;

// middleware to parse incoming JSON data
app.use(express.json());

// array to store payment items
let payments = [
  {
    id: 1,
    name: 'Payment-1'
  },
  {
    id: 2,
    name: 'Payment-2'
  }
];

app.get("/payment-list", (req,res)=>{
    let response = {
        data: {
            item: payments
        }
    };
    res.status(200).json(response);
});

app.post("/payment-list", (req, res) => {
    const newItem = {
        id: req.body.id,
        name: req.body.name
    };
    
    // add the new item to the payments array
    payments.push(newItem);
    
    let response = {
        data: {
            message: 'New payment item added successfully',
            item: newItem
        }
    };
    res.status(200).json(response);
});

app.get("/", (req,res)=>{
    res.send("Payment called");
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
});
