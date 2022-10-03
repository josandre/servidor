"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBManager = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class DBManager {
    constructor(url) {
        this.url = url;
    }
    async connect() {
        try {
            await mongoose_1.default.connect(this.url);
            console.log("Connected.");
        }
        catch (error) {
            throw error;
        }
    }
}
exports.DBManager = DBManager;
//# sourceMappingURL=db.js.map