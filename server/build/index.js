"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const IndexRoutes_1 = __importDefault(require("./routes/IndexRoutes"));
const LandLordRoutes_1 = __importDefault(require("./routes/LandLordRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const PropertyRoutes_1 = __importDefault(require("./routes/PropertyRoutes"));
const AdvisorRoutes_1 = __importDefault(require("./routes/AdvisorRoutes"));
const LandLordPropertyRoutes_1 = __importDefault(require("./routes/LandLordPropertyRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', IndexRoutes_1.default);
        this.app.use('/api/LandLords', LandLordRoutes_1.default);
        this.app.use('/api/Properties', PropertyRoutes_1.default);
        this.app.use('/api/Advisors', AdvisorRoutes_1.default);
        this.app.use('/api/LandLordsProperties', LandLordPropertyRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => { console.log("Servidor en el puerto", this.app.get('port')); });
    }
}
const server = new Server();
server.start();
