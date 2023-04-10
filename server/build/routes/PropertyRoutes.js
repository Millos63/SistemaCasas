"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PropertyController_1 = require("../controllers/PropertyController");
class PropertyRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', PropertyController_1.propertyController.index);
        this.router.post('/', PropertyController_1.propertyController.create);
        this.router.delete('/:id', PropertyController_1.propertyController.delete);
        this.router.put('/:id', PropertyController_1.propertyController.update);
        this.router.get('/:id', PropertyController_1.propertyController.detail);
    }
}
const propertyRoutes = new PropertyRoutes();
exports.default = propertyRoutes.router;
