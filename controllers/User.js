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

const updateUser = (req, res) =>{
    const user = ({
        _id: req.params.id,
        username: req.body.username,
        password: req.body.password,
    })
    console.table(user);
    User.updateOne({ _id: req.params.id }, user).then(()=>{
        res.status(204).json({ mensagem: "Usuário editado"})
    }).catch((erro)=>{
        res.status(400).json({ mensagem: "Usuário não editado: " +erro})
    })
}

const deleteUser = (req, res)=>{
    User.deleteOne({ _id: req.params.id }).then(()=>{
        return res.status(204).json({ mensagem: "Usuário deletado com sucesso!"})
    }).catch((erro)=>{
        return res.status(400).json({mensagem: "Usuário não deletado " +erro})
    })
}

module.exports = {
    createUser, findAllUsers, findUserById, updateUser, deleteUser
}