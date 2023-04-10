"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LandLordPropertyController_1 = require("../controllers/LandLordPropertyController");
class LandLordPropertyRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', LandLordPropertyController_1.landLordPropertyController.index);
        //Aqui modificamos las URL
        //Metodo post : insertar, crear
        //Llamando al metodo
        this.router.post('/', LandLordPropertyController_1.landLordPropertyController.create);
        //Metodo delete
        //Asi le paso a postman ese id en la direccion
        this.router.delete('/:idLandLord/:idProperty', LandLordPropertyController_1.landLordPropertyController.delete);
        //Metodo update, se maneja como put 
        this.router.put('/:idLandLord/:idProperty', LandLordPropertyController_1.landLordPropertyController.update);
        //Metodo detail
        this.router.get('/:idLandLord/:idProperty', LandLordPropertyController_1.landLordPropertyController.detail);
    }
}
const landLordPropertyRoutes = new LandLordPropertyRoutes();
exports.default = landLordPropertyRoutes.router;
