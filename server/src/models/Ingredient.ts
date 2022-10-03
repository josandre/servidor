import {Schema, model} from 'mongoose';

export class Ingrediente{
    name: string;
    cost: number;

    constructor(partial?: Partial<Ingrediente>) {
        if(partial){
            Object.assign(this, partial);
        }
    }
}

const ingredientSchema = new Schema<Ingrediente>({
    name:{
        type: String,
        required: true
    },
    cost:{
        type: Number,
        required: true

    }

})

export const ingredient = model<Ingrediente>("Ingredient", ingredientSchema);