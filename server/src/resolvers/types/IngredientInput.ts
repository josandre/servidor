import {Field, InputType, ID} from "type-graphql";
import {Ingredient} from "../../models/Ingredient";

@InputType()
export class IngredientInput implements Partial<Ingredient>{
    @Field(() => ID, {nullable: true})
    id: string;

    @Field()
    name: string;

    @Field()
    cost: number;

}