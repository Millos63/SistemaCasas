import { Request, Response } from "express";
import pool from "../database";

class LandLordPropertyController{

    public async index (req: Request, res: Response){
        const landLordProperty = await pool.query('SELECT * FROM landlordsproperties')
        res.json(landLordProperty);
    }

    public async create(req:Request, res: Response){
        await pool.query('INSERT INTO LandLordsProperties SET ? ', [req.body]);
        res.json({Text: 'Datos guardados'})
    }

    public async delete(req:Request, res: Response){
        const {idLandLord} = req.params;
        const {idProperty} = req.params;
        await pool.query ('DELETE FROM LandLordsProperties WHERE idLandLord = ? AND idProperty = ?', [idLandLord, idProperty]);
        res.json({Text: 'Registro eliminado de: ' + idLandLord})
    }

    public async update(req:Request, res: Response){
        const {idLandLord} = req.params;
        const {idProperty} = req.params;

        await pool.query('UPDATE LandLordsProperties SET ? WHERE idLandLord = ? AND idProperty = ?', [req.body, idLandLord, idProperty ]);
        res.json({Text: 'Registro actualizado ' + idLandLord })
    }
}