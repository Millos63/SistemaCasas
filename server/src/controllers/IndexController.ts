
import { Request, Response } from "express";

class IndexController{
    public index(req:Request, rest:Response){
        rest.send('HOLA')
    }
}
export const indexController = new IndexController();