"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LandLordController_1 = require("../controllers/LandLordController");
class LandLordRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', LandLordController_1.landLordController.index);
        this.router.post('/', LandLordController_1.landLordController.create);
        this.router.delete('/:id', LandLordController_1.landLordController.delete);
        this.router.put('/:id', LandLordController_1.landLordController.update);
        this.router.get('/:id', LandLordController_1.landLordController.detail);
    }
}
const landLordRoutes = new LandLordRoutes();
exports.default = landLordRoutes.router;
