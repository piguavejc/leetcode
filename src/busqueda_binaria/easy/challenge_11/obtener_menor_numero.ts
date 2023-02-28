function obtener_menor_numero(numeros: number[], objetivo: number) {
  let longitud: number = numeros.length;
  let minimo: number = 0;
  let maximo: number = longitud - 1;
  let inicial: number = numeros[minimo];
  let ultimo: number = numeros[maximo];

  if (inicial === objetivo) return minimo;
  if (ultimo === objetivo) return maximo;

  if (longitud === 2) return -1;

  /* que el arreglo este ordenado */
  if (inicial < ultimo) return busqueda(numeros, objetivo, minimo, maximo);

  /* que el mayor se encuentre al inicio */
  if (inicial > numeros[minimo + 1])
    return busqueda(numeros, objetivo, minimo + 1, maximo);

  /* que el menor se encuentre al final */
  if (ultimo < numeros[maximo - 1])
    return busqueda(numeros, objetivo, minimo, maximo - 1);

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let actual: number = numeros[mitad];
    let siguiente: number = numeros[mitad + 1];
    let anterior: number = numeros[mitad - 1];

    if (objetivo === anterior) return mitad - 1;

    if (objetivo === actual) return mitad;

    if (objetivo === siguiente) return mitad + 1;

    if (actual > siguiente) {
      /* [inicial ; actual] */

      let x2: number = inicial;
      let y2: number = actual;
      let rango_1: boolean = rango(x2, y2, objetivo);

      if (rango_1) return busqueda(numeros, objetivo, 0, mitad);

      /* [siguiente ; ultimo] */

      let x1: number = siguiente;
      let y1: number = numeros[longitud - 1];
      let rango_2: boolean = rango(x1, y1, objetivo);

      if (rango_2) return busqueda(numeros, objetivo, mitad + 1, longitud - 1);

      return -1;
    }

    if (actual < numeros[0] && actual < numeros[longitud - 1])
      maximo = mitad - 1;
    else minimo = mitad + 1;
  }

  return -1;
}
function busqueda(
  numeros: number[],
  objetivo: number,
  minimo: number,
  maximo: number
): number {
  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let actual: number = numeros[mitad];

    if (actual === objetivo) return mitad;

    if (actual > objetivo) maximo = maximo - 1;
    else minimo = minimo + 1;
  }
  return -1;
}
function rango(minimo: number, maximo: number, objetivo: number): boolean {
  return objetivo >= minimo && objetivo <= maximo;
}
export { obtener_menor_numero };
