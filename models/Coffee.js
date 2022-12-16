const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Coffee = new Schema({
    foto: {
        type: String,
        require: true,
    },
    nome: {
        type: String,
        require: true,
    },
    aux: {
        type: String,
        require: true,
    },
    volume: {
        type: String,
        require: true,
    },
    preco: {
        type: String,
        require: true,
    },
    ingredientes: {
        type: String,
        require: true,
    },
})

mongoose.model("coffees", Coffee)
