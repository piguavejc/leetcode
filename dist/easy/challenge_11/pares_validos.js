"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pares_validos = void 0;
function pares_validos(numeros_1, numeros_2) {
  let distancia = 0;
  let longitud_1 = numeros_1.length;
  let longitud_2 = numeros_2.length;
  let i = 0;
  let j = 0;
  while (i < longitud_1 && j < longitud_2) {
    if (numeros_1[i] > numeros_2[j]) ++i;
    else distancia = Math.max(distancia, j++ - i);
  }
  return distancia;
}
exports.pares_validos = pares_validos;
