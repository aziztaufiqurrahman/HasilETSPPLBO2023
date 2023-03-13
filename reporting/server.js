const express = require("express");
const app = express();

const port = 8086;

app.use(express.json());

let reports = [
    {
        id: 1,
        name: 'Sales Report',
        description: 'Monthly sales report',
        generated_date: '2022-02-01',
        url: 'http://localhost:8086/reporting/sales-report.pdf'
    },
    {
        id: 2,
        name: 'Inventory Report',
        description: 'Monthly inventory report',
        generated_date: '2022-02-01',
        url: 'http://localhost:8086/reporting/inventory-report.pdf'
    },
    {
        id: 3,
        name: 'Expense Report',
        description: 'Monthly expense report',
        generated_date: '2022-02-01',
        url: 'http://localhost:8086/reporting/expense-report.pdf'
    }
];

// Method GET
app.get("/reporting", (req,res)=>{
    let response = {
        data: {
            report: reports
        }
    };
    res.status(200).json(response);
});

// Method POST
app.post("/reporting", (req,res)=>{
    let newReport = req.body;
    reports.push(newReport);
    let response = {
        message: "Report created successfully!",
        data: {
            report: newReport
        }
    };
    res.status(201).json(response);
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
});
