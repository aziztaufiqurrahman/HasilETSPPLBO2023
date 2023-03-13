const express = require("express");
const app = express();

const port = 8081;

app.use(express.json());

let orders = [
  {
    id: 1,
    name: "Order-1",
    status: "pending",
  },
  {
    id: 2,
    name: "Order-2",
    status: "shipped",
  },
];

app.get("/order-list", (req, res) => {
  let response = {
    data: {
      item: orders,
    },
  };
  res.status(200).json(response);
});

app.post("/order", (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    name: req.body.name,
    status: req.body.status,
  };
  orders.push(newOrder);

  let response = {
    data: {
      item: orders,
    },
  };
  res.status(200).json(response);
});

app.get("/", (req, res) => {
  res.send("Order called");
});

app.listen(port, () => {
  console.log("Listening at localhost " + port);
});
