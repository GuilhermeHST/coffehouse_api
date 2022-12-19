const express = require("express");
const app = express()
const { createUser, findAllUsers, findUserById } = require("../controllers/User")

app.post("/create", createUser);
app.get("/list", findAllUsers);
app.get("/findById:id", findUserById);

module.exports = app;