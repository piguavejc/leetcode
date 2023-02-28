"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suma_numeros_cudrados = void 0;
function suma_numeros_cudrados(objetivo) {
  let sqrt = Math.trunc(Math.sqrt(objetivo));
  let todo_mal_objetivo = restriccion(
    0,
    Math.pow(2, 31),
    objetivo
  ); /* [0 ; 2^31] */
  if (todo_mal_objetivo) return null;
  if (objetivo === 0) return true;
  while (sqrt > 0) {
    let a2 = sqrt * sqrt;
    let indicado = objetivo - a2;
    if (indicado === 0) return true;
    let respuesta = busqueda_binaria(Math.trunc(indicado / 2));
    if (respuesta) return true;
    sqrt -= 1;
  }
  return false;
}
exports.suma_numeros_cudrados = suma_numeros_cudrados;
function busqueda_binaria(indicado) {
  let minimo = 0;
  let maixmo = indicado;
  while (minimo <= maixmo) {
    let mitad = Math.trunc((minimo + maixmo) / 2);
    let actual = mitad;
    let cuadrado = actual * actual;
    if (cuadrado === indicado) return true;
    if (cuadrado > indicado) maixmo = mitad - 1;
    else minimo = mitad + 1;
  }
  return false;
}
function restriccion(minimo, maixmo, objetivo) {
  if (!(objetivo >= minimo && objetivo <= maixmo)) return true;
  return false;
}
