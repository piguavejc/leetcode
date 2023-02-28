"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juego_adivinanza = void 0;
function juego_adivinanza(numero, objetivo) {
  let minimo = 1;
  let maximo = numero;
  let longitud = numero;
  let todo_mal_numero = restriccion(
    1,
    Math.pow(2, 31),
    longitud
  ); /* [1 ; 2^31] */
  let todo_mal_objetivo = restriccion(
    0,
    Math.pow(10, 6),
    objetivo
  ); /* [0 ; 10^6] */
  if (todo_mal_numero || todo_mal_objetivo) return null;
  if (guess(minimo, objetivo) === 0) return minimo;
  if (guess(maximo, objetivo) === 0) return maximo;
  while (minimo <= maximo) {
    let mitad = Math.trunc((minimo + maximo) / 2);
    let resultado = guess(mitad, objetivo);
    if (resultado === 0) return mitad;
    if (resultado === -1) maximo = mitad - 1;
    if (resultado === 1) minimo = mitad + 1;
  }
}
exports.juego_adivinanza = juego_adivinanza;
function restriccion(minimo, maximo, objetivo) {
  if (!(objetivo >= minimo && objetivo <= maximo)) return true;
  return false;
}
function guess(numero, objetivo) {
  if (numero === objetivo) return 0;
  if (numero > objetivo) return -1;
  if (numero < objetivo) return 1;
}
