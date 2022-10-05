import {ingredient, Ingrediente} from "../models/Ingredient";
import {GraphQLList} from "graphql";

const {

    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID,
    GraphQLSchema

} = require('graphql');



const IngredientType = new GraphQLObjectType({
    name:'Ingredient',
    description: 'This represents an ingredient',
    fields: () => ({
        name: {type: GraphQLNonNull(GraphQLString)},
        cost: {type: GraphQLNonNull(GraphQLInt)},
        _id:{type: GraphQLID}
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'QueryRoot',
    fields: () => ({
        ingredient: {
            type: IngredientType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args){
                return ingredient.findById(args.id);
            }
        },
        ingredients:{
            type: new GraphQLList(IngredientType),
            resolve(parent, args){
                return ingredient.find({});
            }
        }

    })
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addIngredient: {
            type: IngredientType,
            args:{
                name: {type: new GraphQLNonNull(GraphQLString)},
                cost: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parent, args){
                const ingredientCreated = new ingredient({
                    name: args.name,
                    cost: args.cost
                });

                return ingredientCreated.save();
            }
        },
        deleteIngredient:{
            type: IngredientType,
            args:{id:{type: GraphQLID}},
            resolve(parent, args){
                 return ingredient.findByIdAndDelete(args.id)
            }

        },

        updateIngredient:{
            type: IngredientType,
            args:{
                id:{type: GraphQLID},
                name:{type: GraphQLString},
                cost:{type: GraphQLInt}
            },
            resolve(parent, args){

               return ingredient.findByIdAndUpdate(args.id,{
                    name: args.name,
                    cost: args.cost
               },{
                   new: true
               });
            }
        }
    }
})



module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: Mutation
})


