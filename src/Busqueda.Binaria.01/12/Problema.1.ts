function obtener_menor_numero(numeros: number[]) {
  let longitud: number = numeros.length;
  let minimo: number = 0;
  let maximo: number = longitud - 1;
  let inicial: number = numeros[minimo];
  let ultimo: number = numeros[minimo + 1];

  if (longitud === 2) {
    if (inicial > ultimo) return ultimo;

    return inicial;
  }

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let actual: number = numeros[mitad];
    let anterior: number = numeros[mitad - 1];
    let siguiente: number = numeros[mitad + 1];

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
export { obtener_menor_numero };
