const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
  nome: String,
  idade: Number
})

module.exports = mongoose.model('Usuario', usuarioSchema)
//nome do db e depois do schema