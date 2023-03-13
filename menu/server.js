const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const port = 8085;

// Middleware untuk parsing request body sebagai JSON
app.use(bodyParser.json());

let menuList = [
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
];

app.get("/menu", (req,res)=>{
    let response = {
        data: {
            menu: menuList
        }
    };
    res.status(200).json(response);
});

// Endpoint untuk menambahkan menu baru
app.post("/menu", (req, res) => {
    const { name, price } = req.body;

    // Memastikan input yang diberikan pengguna valid
    if (!name || !price) {
        res.status(400).json({ error: "Name and price are required fields" });
        return;
    }

    // Mencari ID yang belum digunakan sebelumnya
    const idList = menuList.map(menu => menu.id);
    const newId = Math.max(...idList) + 1;

    // Membuat menu baru dan menambahkannya ke dalam array menuList
    const newMenu = {
        id: newId,
        name,
        price
    };
    menuList.push(newMenu);

    res.status(201).json({ success: true, message: "Menu successfully added", data: newMenu });
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
});
