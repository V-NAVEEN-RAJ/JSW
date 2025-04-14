// Importing required Modules

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mail = require("../JSW/utils/mailer")
app.use(cors({origin:4200}));  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Supplier CRUD
const supplierControl = require("./router/supplier.router");

//customer CRUD
const customerControl = require("./router/customer.router");

//question CRUD
const questionControl = require("./router/question.router");

//Employee CRUD
const employeeControl = require("./router/employee_crud.router");

//Admin CRUD
const adminControl = require("./router/admin.router");

//To check if the API is working or not
app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This is a API for JSW",
  });
});      


//Routes
app.use("/supplier", supplierControl);
app.use("/customer", customerControl);
app.use("/question", questionControl);
app.use("/employee", employeeControl);
app.use("/admin", adminControl);

//Listening Port
app.listen(3001, () => {
  console.log("Server Connected SuccessFully  " + process.env.APP_PORT);
});

// app.listen(); Use while deploying
