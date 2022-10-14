import {prop as Property, getModelForClass, modelOptions} from "@typegoose/typegoose";
import {Field, ObjectType, ID} from "type-graphql";


@ObjectType({description: 'the ingredients model'})// ObjectType and field are used for defining properties for our model graphql
@modelOptions({schemaOptions:{collection: 'Ingredients', timestamps: true}})

export class Ingredient {
    @Field(()=> ID)
    id: string;

    @Field()
    @Property({type: () => String, required: true})
    name: string;

    @Field()
    @Property({type: () => Number, required: true})
    cost: number;

    @Field()
    @Property({required: true, default: Date.now()})
    date: Date;
}

export const ingredientModel = getModelForClass(Ingredient);