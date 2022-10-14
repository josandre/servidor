import {prop as Property, getModelForClass, modelOptions} from "@typegoose/typegoose";
import {Field, ObjectType, ID} from "type-graphql";

@ObjectType({description: 'the ingredients model'})// ObjectType and field are used for defining properties for our model graphql
@modelOptions({schemaOptions:{collection: 'Ingredients', timestamps: true}})

export class Client{
    @Field(()=> ID)
    id: string;

    @Field()
    @Property({type: () => String, required: true})
    name: string;

    @Field()
    @Property({type: () => String, required: true})
    phone: string;

    @Field()
    @Property({type: () => String, required: true})
    password: string;

    @Field()
    @Property({required: true, default: Date.now()})
    date: Date;
}

export const clientModel = getModelForClass(Client);