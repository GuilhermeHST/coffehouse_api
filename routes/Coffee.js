const express = require("express");
const app = express();
const { createCoffee, findCoffeeById, findAllCoffees, updateCoffee, deleteCoffee } = require("../controllers/Coffee");

app.post("/create", createCoffee);
app.get("/list", findAllCoffees);
app.get("/findById/:id", findCoffeeById);
app.patch("/update/:id", updateCoffee);
app.delete("/delete/:id", deleteCoffee);

module.exports = app;