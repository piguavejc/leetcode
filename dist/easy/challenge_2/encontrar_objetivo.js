"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encontrar_objetivo = void 0;
function encontrar_objetivo(numeros, objetivo) {
  let minimo = 0;
  let maximo = numeros.length - 1;
  let longitud = numeros.length;
  let inicial = numeros[minimo];
  let final = numeros[maximo];
  let todo_mal_numeros = restriccion(longitud, 1, Math.pow(10, 4)); // [1 ; 10^4] intervalo cerrado
  let todo_mal_objetivo = restriccion(
    objetivo,
    -Math.pow(10, 4),
    Math.pow(10, 4)
  ); // [-10^4 ; 10^4] intervalo cerrado
  if (todo_mal_numeros || todo_mal_objetivo) return -1;
  // 0 === 0(menor numero)
  if (objetivo === inicial) return minimo;
  // 10 === 10(mayor numero)
  if (objetivo === final) return maximo;
  // -1 < 1(menor numero)
  if (objetivo < inicial) return minimo;
  // 11 > 10(mayor numero)
  if (objetivo > final) return maximo + 1;
  while (minimo <= maximo) {
    let mitad = Math.trunc((minimo + maximo) / 2);
    let actual = numeros[mitad];
    let anterior = numeros[mitad - 1];
    let todo_mal_actual = restriccion(
      actual,
      -Math.pow(10, 4),
      Math.pow(10, 4)
    ); // [-10^4 ; 10^4] intervalo cerrado
    if (todo_mal_actual) return -1;
    if (objetivo === numeros[mitad]) return mitad;
    if (objetivo < actual) {
      if (objetivo > anterior || mitad === 0) return mitad;
      if (mitad === 0) return mitad;
      maximo = mitad - 1;
    } else minimo = mitad + 1;
  }
  return numeros.length;
}
exports.encontrar_objetivo = encontrar_objetivo;
function restriccion(numero, minimo, maximo) {
  if (!(numero >= minimo && numero <= maximo)) return true;
  return false;
}
