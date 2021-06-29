"use strict";
/* os navegadores não interpretam o sistema de modulos, no curso usa systemjs@0.21.6 nos exercícios
    este é um cenário de estudos, no backend o sistema de modulos é interpretado e profissionalmente
    outras ferramentas são usadas
    o sistemjs usa apenas compilação commonsjs
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { areaRetangulo } from './retangulo'   //uso na origem de 'exports'
const retangulo_1 = __importDefault(require("./retangulo")); //uso na origem de 'exports default!'
const circunferencia_1 = require("./circunferencia"); //uso na origem de 'exports'
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(2));
//npm i -s @types/node
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
//# sourceMappingURL=modulos.js.map