import { Request, Response } from "express";
import pool from "../database"

class LandLordController{
    public async index(req:Request, rest:Response){
        const landLords = await pool.query('SELECT * FROM LandLords')
        rest.json(landLords);
    }

    public async create(req:Request, rest:Response):Promise<void>{
        await pool.query('INSERT INTO LandLords SET ?', [req.body]);
        rest.json({Text: 'Datos de propietario guardados'});
    }

    public async delete(req:Request, rest:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM LandLords WHERE idLandLord = ?',[id]);
        rest.json({Text: 'Datos de propietario borrados ' + id}); 
    }

    public async update(req:Request, rest:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE LandLords SET ? WHERE idLandLord = ?', [req.body, id]);
        rest.json({Text: 'Datos actualizados' + id});
    }

    public async detail(req:Request, rest: Response):Promise<any>{
        const {id} = req.params;
        const landLord = await pool.query("SELECT * FROM LandLords WHERE idLandLord = ?", [id]);
        if(landLord.length > 0){
            console.log(landLord[0]);
            return rest.json(landLord[0]);
        }
        else
        {
            rest.status(404).json({text: 'Propietario no existe'});
        }
    }

}

export const landLordController = new LandLordController();
export default landLordController;