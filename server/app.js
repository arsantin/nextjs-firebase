const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')



 
const app = express()

//cors
app.use(cors())
mongoose.connect('mongodb://localhost:27017/foodtruckcwb')
mongoose.connection.once('open', ()=>{
  console.log('conectado ao mongodb')
})

app.listen(4000, ()=>{
  console.log('rodando')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.get('/', (req,res)=>{
  res.send("hi")
})