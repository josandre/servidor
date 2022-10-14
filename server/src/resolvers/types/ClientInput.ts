import {Field, InputType, ID} from "type-graphql";
import {Client} from "../../models/Client";

@InputType()
export class ClientInput implements Partial<Client>{
    @Field(() => ID, {nullable: true})
    id: string;

    @Field()
    name: string;

    @Field()
    phone: string;

    @Field()
    password: string;

}