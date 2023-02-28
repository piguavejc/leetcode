"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros_negativos = void 0;
function numeros_negativos(numeros) {
  let n = numeros.length;
  let contador = 0;
  let todo_mal_m = restriccion_1(n, 100); /* [n ; 100] */
  if (todo_mal_m) return null;
  for (let i = 0; i < n; i++) {
    let m = numeros[i].length;
    let actual = numeros[i][0];
    let ultimo = numeros[i][m - 1];
    // if (!(n === m)) return null; /* [n ; m] */
    if (actual < 0 && ultimo < 0) {
      contador += m;
      continue;
    }
    if (ultimo < 0) {
      let resultado = busqueda_binaria(numeros[i]);
      contador += resultado;
    }
  }
  return contador;
}
exports.numeros_negativos = numeros_negativos;
function busqueda_binaria(numeros) {
  let m = numeros.length;
  let minimo = 0;
  let maximo = m - 1;
  let todo_mal_n = restriccion_1(1, m); /* [1 ; m] */
  if (todo_mal_n) return null;
  while (minimo <= maximo) {
    let mitad = Math.trunc((minimo + maximo) / 2);
    let actual = numeros[mitad];
    let siguiente = numeros[mitad + 1];
    let todo_mal_actual = restriccion_2(-100, 100, actual); /* [-100 ; 100] */
    if (todo_mal_actual) return null;
    if (actual >= 0 && siguiente < 0) return m - mitad - 1;
    if (siguiente >= 0) minimo = mitad + 1;
    else maximo = mitad - 1;
  }
  return 0;
}
function restriccion_1(indicado, objetivo) {
  if (!(indicado <= objetivo)) return true;
  return false;
}
function restriccion_2(minimo, maximo, objetivo) {
  if (!(objetivo >= minimo && objetivo <= maximo)) return true;
  return false;
}
