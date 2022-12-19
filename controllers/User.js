const mongoose = require("mongoose")
require("../models/User")
const User = mongoose.model("users")

const createUser = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    })
    user.save().then(() => {
        return res.status(200).json({ mensagem: "Usuário Salvo" })
    }).catch((erro) => {
        return res.status(500).json({ mensagem: "Erro: Usuário não salvo!" })
    })
}

const findAllUsers = (req, res) => {
    User.find().lean().then((user) => {
        return res.status(200).json(user)
    }).catch((erro) => {
        return res.status(404).json({ mensagem: "Erro: erro ao listar usuarios" })
    })
}

const findUserById = (req, res) => {
    User.findOne({ _id: req.params.id }).then((user)=>{
        res.status(200).json(user)
    }).catch((erro)=>{
        res.status(404).json({ mensagem: "Erro: Usuário não encontrado" })
    })
}

module.exports = {
    createUser, findAllUsers, findUserById
}