"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.landLordController = void 0;
const database_1 = __importDefault(require("../database"));
class LandLordController {
    index(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const landLords = yield database_1.default.query('SELECT * FROM LandLords');
            rest.json(landLords);
        });
    }
    create(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO LandLords SET ?', [req.body]);
            rest.json({ Text: 'Datos de propietario guardados' });
        });
    }
    delete(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM LandLords WHERE idLandLord = ?', [id]);
            rest.json({ Text: 'Datos de propietario borrados ' + id });
        });
    }
    update(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE LandLords SET ? WHERE idLandLord = ?', [req.body, id]);
            rest.json({ Text: 'Datos actualizados' + id });
        });
    }
    detail(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const landLord = yield database_1.default.query("SELECT * FROM LandLords WHERE idLandLord = ?", [id]);
            if (landLord.length > 0) {
                console.log(landLord[0]);
                return rest.json(landLord[0]);
            }
            else {
                rest.status(404).json({ text: 'Propietario no existe' });
            }
        });
    }
}
exports.landLordController = new LandLordController();
exports.default = exports.landLordController;
