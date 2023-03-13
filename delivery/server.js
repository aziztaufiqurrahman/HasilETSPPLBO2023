const express = require("express");
const app = express();

const port = 8088;

app.use(express.json());

app.get("/delivery", (req,res)=>{
    let response = {
        data: {
            delivery: [
                {
                    id: 1,
                    name: 'Joko',
                    address: 'Jl. Raya No. 10',
                    phone: '08123456789',
                    status: 'shipped'
                },
                {
                    id: 2,
                    name: 'Mia',
                    address: 'Jl. Gajah Mada No. 20',
                    phone: '08123456788',
                    status: 'not shipped'
                },
                {
                    id: 3,
                    name: 'Agus',
                    address: 'Jl. Merdeka No. 30',
                    phone: '08123456787',
                    status: 'shipped'
                }
            ]
        }
    };
    res.status(200).json(response);
});

app.post("/delivery", (req, res) => {
    const delivery = req.body.delivery;
    if (delivery) {
        delivery.forEach((d) => {
            if (d.status === 'shipped') {
                console.log(`${d.name}'s delivery has been shipped`);
            } else {
                console.log(`${d.name}'s delivery is not shipped yet`);
            }
        });
        res.status(200).json({
            message: 'Delivery status checked'
        });
    } else {
        res.status(400).json({
            error: 'No delivery information provided'
        });
    }
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
});
