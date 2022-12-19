const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const coffeeRoutes = require("./routes/Coffee")
const userRoutes = require("./routes/User")
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("banco rodando");
}).catch((erro) => {
    console.log("erro na conexão: " + erro);
})

app.use("/coffee", coffeeRoutes)
app.use("/user", userRoutes)

app.listen(3000, () => {
    console.log("servidor rodando");
})

