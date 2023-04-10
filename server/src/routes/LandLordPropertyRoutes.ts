import { Router } from "express"
import {landLordPropertyController} from "../controllers/LandLordPropertyController";

class LandLordPropertyRoutes{
    public router: Router = Router();

    constructor() {
        this.config();        
    }

    config():void{
        
        this.router.get('/', landLordPropertyController.index);
        
        //Aqui modificamos las URL
        
        //Metodo post : insertar, crear
        //Llamando al metodo
        this.router.post('/', landLordPropertyController.create);

        //Metodo delete
        //Asi le paso a postman ese id en la direccion
        this.router.delete('/:idLandLord/:idProperty', landLordPropertyController.delete);
        
        //Metodo update, se maneja como put 
        this.router.put('/:idLandLord/:idProperty', landLordPropertyController.update)

        //Metodo detail
        this.router.get('/:idLandLord/:idProperty', landLordPropertyController.detail)


    }
}

const landLordPropertyRoutes = new LandLordPropertyRoutes();
export default landLordPropertyRoutes.router;