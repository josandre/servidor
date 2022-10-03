import {Router} from "express";

export interface MController {
    router: Router;

    route: string;

    initializeSubRoutes();
}