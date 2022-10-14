import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Client, clientModel} from "../models/Client";
import {ClientInput} from "./types/ClientInput";

@Resolver((_of) => Client)

export class ClientResolver{

    @Query((_returns) => Client, {nullable: false, name: 'Ingredient'})
    async getClientById(@Arg('id') id: string){
        return clientModel.findById({_id: id});
    }

    @Query(() => [Client], {name: 'getAllClients', description: 'Get list of clients'})
    async  getAllClients(){
        return clientModel.find();
    }

    @Mutation(() => Client, {name:'createClient'})
    async createClient(@Arg('newClientInput') {name, phone, password}: ClientInput): Promise<Client>{//client input is the parameter type, because NotesInput contains the data for creating and editing notes
        return (
            await clientModel.create({
                name,
                phone,
                password
            })
        ).save()
    }

    @Mutation(() => Client, {name: 'updateClient'})
    async updateClient(
        @Arg('EditIngredientInput') {id, name, phone, password }: ClientInput): Promise<Client>{
        const clientUpdating = await clientModel.findByIdAndUpdate(
            {_id: id},
            {
                name,
                phone,
                password
            },
            {new: true}
        );
        return clientUpdating;
    }

    @Mutation(() => String, {name:'deleteClient'})
    async deleteClient(@Arg('id') id: string): Promise<String>{
        const result = await clientModel.deleteOne({_id: id});

        if(result.deletedCount == 1) return id;
        else return '';
    }
}