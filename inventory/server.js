const express = require("express");
const app = express();

const port = 8084;

// Data awal inventory
let inventory = [
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
];

// Endpoint GET
app.get("/inventory", (req,res)=>{
    let response = {
        data: {
            inventory: inventory
        }
    };
    res.status(200).json(response);
});

// Endpoint POST untuk menambahkan barang ke dalam inventory
app.post("/inventory", (req, res) => {
  const { id, name, stock } = req.body;
  
  if (!id || !name || !stock) {
    return res.status(400).send('Request harus mengirimkan ID, nama, dan stok barang yang ingin ditambahkan.');
  }

  // Cek apakah ID sudah ada di dalam inventory
  const existingItem = inventory.find(item => item.id === id);
  if (existingItem) {
    return res.status(409).send(`Barang dengan ID ${id} sudah ada di dalam inventory.`);
  }

  // Tambahkan barang baru ke dalam inventory
  const newItem = {
    id: id,
    name: name,
    stock: stock
  };
  inventory.push(newItem);

  // Kirim response
  res.status(201).send(`Barang ${name} dengan ID ${id} berhasil ditambahkan ke dalam inventory.`);
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
});
