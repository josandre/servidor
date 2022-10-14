import {Resolver, Mutation, Arg, Query, ID} from "type-graphql";
import {ingredientModel, Ingredient} from "../models/Ingredient";
import {IngredientInput} from "./types/IngredientInput";

@Resolver((_of) => Ingredient)

export class IngredientResolver{

    @Query((_returns) => Ingredient, {nullable: false, name: 'Notes'})
    async getIngredientsById(@Arg('id') id: string){
        return ingredientModel.findById({_id: id});
    }

    @Query(() => [Ingredient], {name: 'getAllIngredients', description: 'Get list of ingredients'})
    async  getAllIngredients(){
        return ingredientModel.find();
    }

    @Mutation(() => Ingredient, {name:'createIngredient'})
    async createIngredient(@Arg('newIngredientInput') {name, cost}: IngredientInput): Promise<Ingredient>{//notes input is the parameter type, because NotesInput contains the data for creating and editing notes
        const ingredient = (
            await ingredientModel.create({
                name,
                cost,
            })
        ).save();
        return ingredient
    }

    @Mutation(() => Ingredient, {name: 'updateIngredient'})
    async updateIngredient(
        @Arg('EditIngredientInput') {id, name, cost }: IngredientInput): Promise<Ingredient>{
        const ingredient = await ingredientModel.findByIdAndUpdate(
            {_id: id},
            {
                name,
                cost
            },
            {new: true}
        );
        return ingredient;
    }

    @Mutation(() => String, {name:'deleteIngredient'})
    async deleteIngredient(@Arg('id') id: string): Promise<String>{
        const result = await ingredientModel.deleteOne({_id: id});

        if(result.deletedCount == 1) return id;
        else return '';
    }





}