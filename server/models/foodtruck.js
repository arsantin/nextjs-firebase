const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodtruckSchema = new Schema({
  nome: String,
  categoria: String,
  usuarioId: String
})

module.exports = mongoose.model('Foodtruck', foodtruckSchema)
//nome do db e depois do schema