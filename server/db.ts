import mongoose from "mongoose";

export class DBManager {
    private readonly db;
    private readonly url: string;

    constructor (url: string) {
        this.url = url;
    }

    async connect (): Promise <void> {
        try {
            await mongoose.connect (this.url);
            console.log ("Connected.");
        }
        catch (error) {
            throw error;
        }
    }
}