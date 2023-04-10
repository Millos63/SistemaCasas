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
exports.propertyController = void 0;
const database_1 = __importDefault(require("../database"));
class PropertyController {
    index(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const properties = yield database_1.default.query('SELECT * FROM Properties');
            rest.json(properties);
        });
    }
    create(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO properties SET ?', [req.body]);
            rest.json({ Text: 'Datos de propiedad guardados' });
        });
    }
    delete(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM properties WHERE idProperty = ?', [id]);
            rest.json({ Text: 'Datos de propiedad borrados ' + id });
        });
    }
    update(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE properties SET ? WHERE idProperty = ?', [req.body, id]);
            rest.json({ Text: 'Datos actualizados' + id });
        });
    }
    detail(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const property = yield database_1.default.query("SELECT * FROM properties WHERE idProperty = ?", [id]);
            if (property.length > 0) {
                console.log(property[0]);
                return rest.json(property[0]);
            }
            else {
                rest.status(404).json({ text: 'propiedad no existe' });
            }
        });
    }
}
exports.propertyController = new PropertyController();
exports.default = exports.propertyController;
