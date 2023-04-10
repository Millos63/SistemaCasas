import {Router} from 'express';
import {advisorController} from "../controllers/AdvisorController";

class AdvisorRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', advisorController.index);
        this.router.post('/', advisorController.create);
        this.router.delete('/:id', advisorController.delete);
        this.router.put('/:id', advisorController.update);
        this.router.get('/:id', advisorController.detail);


    }
}
const advisorRoutes = new AdvisorRoutes();
export default advisorRoutes.router;
