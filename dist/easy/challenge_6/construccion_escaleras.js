"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construccion_escaleras = void 0;
function construccion_escaleras(monedas) {
  let minimo = 1;
  let maximo = monedas;
  let todo_mal_moneda = restricciones(monedas, 1, Math.pow(2, 31) - 1); // [1 ; 2^31] intervalo cerrado
  if (todo_mal_moneda) return null;
  while (minimo <= maximo) {
    maximo = maximo - minimo;
    minimo = minimo + 1;
  }
  return minimo - 1;
}
exports.construccion_escaleras = construccion_escaleras;
function restricciones(numero, minimo, maximo) {
  if (!(numero >= minimo && numero <= maximo)) return true;
  return false;
}
