import {Router} from 'express';
import { landLordController} from "../controllers/LandLordController";

class LandLordRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', landLordController.index);
        this.router.post('/', landLordController.create);
        this.router.delete('/:id', landLordController.delete);
        this.router.put('/:id', landLordController.update);
        this.router.get('/:id', landLordController.detail);


    }
}
const landLordRoutes = new LandLordRoutes();
export default landLordRoutes.router;
