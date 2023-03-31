"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, rest) {
        rest.send('HOLA');
    }
}
exports.indexController = new IndexController();
