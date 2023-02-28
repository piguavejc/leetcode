"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suma_vectores = void 0;
function suma_vectores(objetivo, numeros) {
  let longitud = numeros.length;
  let todo_mal_objetivo = restricciones(
    -1000,
    1000,
    objetivo
  ); /* [-1000 ; 1000] */
  let todo_mal_numeros = restricciones(
    2,
    3 * Math.pow(10, 4),
    longitud
  ); /* [2 ; (3 *10^4)] */
  if (todo_mal_objetivo || todo_mal_numeros) return null;
  for (let i = 0; i < longitud; i++) {
    const actual = numeros[i];
    let indicado = objetivo - actual;
    const { comprobacion, indice } = buscar_pareja(numeros, indicado, i);
    if (comprobacion) {
      if (indice > i) return [i + 1, indice + 1];
      else return [indice + 1, i + 1];
    }
  }
}
exports.suma_vectores = suma_vectores;
function buscar_pareja(numeros, objetivo, excluido) {
  let longitud = numeros.length;
  let minimo = 0;
  let maximo = longitud - 1;
  while (minimo <= maximo) {
    let mitad = Math.trunc((minimo + maximo) / 2);
    let actual = numeros[mitad];
    let todo_mal_actual = restricciones(
      -1000,
      1000,
      actual
    ); /* [-1000; 1000] */
    if (todo_mal_actual) return null;
    if (objetivo === actual && mitad !== excluido) {
      return { comprobacion: true, indice: mitad };
    }
    if (actual >= objetivo) maximo = mitad - 1;
    else minimo = mitad + 1;
  }
  return { comprobacion: false, indice: -1 };
}
function restricciones(minimo, maximo, objetivo) {
  if (!(objetivo >= minimo && objetivo <= maximo)) return true;
  return false;
}
