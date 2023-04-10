"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdvisorController_1 = require("../controllers/AdvisorController");
class AdvisorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', AdvisorController_1.advisorController.index);
        this.router.post('/', AdvisorController_1.advisorController.create);
        this.router.delete('/:id', AdvisorController_1.advisorController.delete);
        this.router.put('/:id', AdvisorController_1.advisorController.update);
        this.router.get('/:id', AdvisorController_1.advisorController.detail);
    }
}
const advisorRoutes = new AdvisorRoutes();
exports.default = advisorRoutes.router;
