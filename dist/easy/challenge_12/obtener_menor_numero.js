"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtener_menor_numero = void 0;
function obtener_menor_numero(numeros) {
  let longitud = numeros.length;
  let minimo = 0;
  let maximo = longitud - 1;
  let inicial = numeros[minimo];
  let ultimo = numeros[minimo + 1];
  if (longitud === 2) {
    if (inicial > ultimo) return ultimo;
    return inicial;
  }
  while (minimo <= maximo) {
    let mitad = Math.trunc((minimo + maximo) / 2);
    let actual = numeros[mitad];
    let anterior = numeros[mitad - 1];
    let siguiente = numeros[mitad + 1];
    if (actual < anterior && actual < siguiente) {
      if (actual < numeros[0] && actual < numeros[longitud - 1]) return actual;
    }
    if (actual > anterior && actual > siguiente) {
      if (siguiente < numeros[0] && siguiente < numeros[longitud - 1])
        return siguiente;
    }
    if (actual > siguiente && mitad === longitud - 2) {
      return siguiente;
    }
    if (actual < numeros[0] && actual < numeros[longitud - 1])
      maximo = mitad - 1;
    else minimo = mitad + 1;
  }
  return numeros[0];
}
exports.obtener_menor_numero = obtener_menor_numero;
