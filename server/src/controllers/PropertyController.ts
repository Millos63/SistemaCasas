import { Request, Response } from "express";
import pool from "../database"

class PropertyController{
    public async index(req:Request, rest:Response){
        const properties = await pool.query('SELECT * FROM Properties')
        rest.json(properties);
    }

    public async create(req:Request, rest:Response):Promise<void>{
        await pool.query('INSERT INTO properties SET ?', [req.body]);
        rest.json({Text: 'Datos de propiedad guardados'});
    }

    public async delete(req:Request, rest:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM properties WHERE idProperty = ?',[id]);
        rest.json({Text: 'Datos de propiedad borrados ' + id}); 
    }

    public async update(req:Request, rest:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE properties SET ? WHERE idProperty = ?', [req.body, id]);
        rest.json({Text: 'Datos actualizados' + id});
    }

    public async detail(req:Request, rest: Response):Promise<any>{
        const {id} = req.params;
        const property = await pool.query("SELECT * FROM properties WHERE idProperty = ?", [id]);
        if(property.length > 0){
            console.log(property[0]);
            return rest.json(property[0]);
        }
        else
        {
            rest.status(404).json({text: 'propiedad no existe'});
        }
    }

}

export const propertyController = new PropertyController();
export default propertyController;