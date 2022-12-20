const express = require("express");
const app = express()
const { createUser, findAllUsers, findUserById, updateUser, deleteUser } = require("../controllers/User")

app.post("/create", createUser);
app.get("/list", findAllUsers);
app.get("/findById/:id", findUserById);
app.patch("/update/:id", updateUser);
app.delete("/delete/:id", deleteUser);

module.exports = app;