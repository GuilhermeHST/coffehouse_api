const mongoose = require("mongoose")
require("../models/Coffee")
const Coffee = mongoose.model("coffees")

const createCoffee = (req, res) => {
    const coffee = new Coffee({
        foto: req.body.foto,
        nome: req.body.nome,
        aux: req.body.aux,
        volume: req.body.volume,
        preco: req.body.preco,
        ingredientes: req.body.ingredientes, 
    })
    coffee.save().then(()=>{
        return res.status(200).json({ mensagem: "Café salvo" })
    }).catch((erro)=>{
        return res.status(500).json({ mensagem: "Erro: Café não foi salvo." })
    })
}

const findAllCoffees = (req, res) => {
    Coffee.find().lean().then((coffees)=>{
        return res.status(200).json(coffees)
    }).catch((erro)=>{
        return res.status(404).json({ mensagem: "Erro: erro ao listar Cafés" })
    })
}

const findCoffeeById = (req, res) => {
    Coffee.findOne({ _id: req.params.id }).then((coffee)=>{
        res.status(200).json(coffee)
    }).catch((erro)=>{
        res.status(404).json({ mensagem: "Erro: café não encontrado" })
    })
}

const updateCoffee = (req, res) => {
    const coffee = new Coffee({
        _id: req.params.id,
        foto: req.body.foto,
        nome: req.body.nome,
        aux: req.body.aux,
        volume: req.body.volume,
        preco: req.body.preco,
        ingredientes: req.body.ingredientes, 
    })
    
    console.table(coffee);
    Coffee.updateOne({ _id: req.params.id }, coffee).then(()=>{
        res.status(204).json({ mensagem: "Café editado" })
    }).catch((erro) => {
        res.status(400).json({ mensagem: "Café não editado" + erro })
    })    
}

const deleteCoffee = (req, res) => {
    Coffee.deleteOne({ _id: req.params.id}).then(()=>{
        return res.status(204).json({mensagem: "Café deletado com sucesso!"})
    }).catch((error)=>{
        return res.status(400).json({mensagem: "Não foi possível deletar este café, tente novamente!"})
    })
}


module.exports = {
    createCoffee, findAllCoffees, findCoffeeById, updateCoffee, deleteCoffee
}