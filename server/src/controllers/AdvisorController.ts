import { Request, Response } from "express";
import pool from "../database"

class AdvisorController{
    public async index(req:Request, rest:Response){
        const advisors = await pool.query('SELECT * FROM Advisors')
        rest.json(advisors);
    }

    public async create(req:Request, rest:Response):Promise<void>{
        await pool.query('INSERT INTO Advisors SET ?', [req.body]);
        rest.json({Text: 'Datos de asesor guardados'});
    }

    public async delete(req:Request, rest:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM Advisors WHERE idAdvisor = ?',[id]);
        rest.json({Text: 'Datos de asesor borrados ' + id}); 
    }

    public async update(req:Request, rest:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE Advisors SET ? WHERE idAdvisor = ?', [req.body, id]);
        rest.json({Text: 'Datos actualizados' + id});
    }

    public async detail(req:Request, rest: Response):Promise<any>{
        const {id} = req.params;
        const advisor = await pool.query("SELECT * FROM Advisors WHERE idAdvisor = ?", [id]);
        if(advisor.length > 0){
            console.log(advisor[0]);
            return rest.json(advisor[0]);
        }
        else
        {
            rest.status(404).json({text: 'asesor no existe'});
        }
    }

}

export const advisorController = new AdvisorController();
export default advisorController;