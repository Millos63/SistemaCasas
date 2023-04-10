import {Router} from 'express';
import { propertyController} from "../controllers/PropertyController";

class PropertyRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', propertyController.index);
        this.router.post('/', propertyController.create);
        this.router.delete('/:id', propertyController.delete);
        this.router.put('/:id', propertyController.update);
        this.router.get('/:id', propertyController.detail);


    }
}
const propertyRoutes = new PropertyRoutes();
export default propertyRoutes.router;
