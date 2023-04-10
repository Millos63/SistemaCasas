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
const database_1 = __importDefault(require("../database"));
class LandLordPropertyController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const landLordProperty = yield database_1.default.query('SELECT * FROM landlordsproperties');
            res.json(landLordProperty);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO LandLordsProperties SET ? ', [req.body]);
            res.json({ Text: 'Datos guardados' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idLandLord } = req.params;
            const { idProperty } = req.params;
            yield database_1.default.query('DELETE FROM LandLordsProperties WHERE idLandLord = ? AND idProperty = ?', [idLandLord, idProperty]);
            res.json({ Text: 'Registro eliminado de: ' + idLandLord });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idLandLord } = req.params;
            const { idProperty } = req.params;
            yield database_1.default.query('UPDATE LandLordsProperties SET ? WHERE idLandLord = ? AND idProperty = ?', [req.body, idLandLord, idProperty]);
            res.json({ Text: 'Registro actualizado ' + idLandLord });
        });
    }
}
