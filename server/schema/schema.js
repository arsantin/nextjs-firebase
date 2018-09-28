const graphql = require('graphql')
const Foodtruck = require('../models/foodtruck')
const Usuario = require('../models/usuario')
const _ = require('lodash')
const {
  GraphQLObjectType, 
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
  } = graphql



const FoodtruckType = new GraphQLObjectType({
  name: 'Foodtruck',
  fields: ()=> ({   
    id: {type: GraphQLID}, 
    nome: {type: GraphQLString},
    categoria: {type: GraphQLString},
    usuario: {
      type: UsuarioType,
      resolve(parent, args){
        console.log(parent)
          return Usuario.findById(parent.usuarioId)
      }
    }    
  }) 
})

const UsuarioType = new GraphQLObjectType({
  name: 'Usuario',
  fields: ()=> ({   
    id: {type: GraphQLID}, 
    nome: {type: GraphQLString},
    idade: {type: GraphQLInt},  
    foodtrucks:{
      type: new GraphQLList(FoodtruckType),
      resolve(parent, args){
        return Foodtruck.find({ usuarioId: parent.id})
      }
    }  
  }) 
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    foodtruck: {
      type: FoodtruckType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){  
      return Foodtruck.findById(args.id)
      }
    },
    usuario:{
      type: UsuarioType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return Usuario.findById(args.id)
      }
    },
    foodtrucks:{
      type: new GraphQLList(FoodtruckType),
      resolve(parent, args){
        return Foodtruck.find({})
      }
    },
    usuarios:{
      type: new GraphQLList(UsuarioType),
      resolve(parent, args){
        return Usuario.find({})
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields:{
    addUsuario:{
      type: UsuarioType,
      args: {
        nome: {type: GraphQLString},
        idade: {type: GraphQLInt}
      },
      resolve(parents, args){
        let usuario = new Usuario({
          nome: args.nome,
          idade: args.idade
        })
        return usuario.save()
      }
    },
    addFoodtruck:{
      type: FoodtruckType,
      args: {
        nome: {type: GraphQLString},
        categoria: {type: GraphQLString},
        usuarioId: {type: GraphQLID}
      },
      resolve(parents, args){
        let foodtruck = new Foodtruck({
          nome: args.nome,
          categoria: args.categoria,
          usuarioId: args.usuarioId
        })
        return foodtruck.save()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query:RootQuery,
  mutation: Mutation
})