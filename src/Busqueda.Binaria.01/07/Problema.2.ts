function vector_especial(numeros: number[]): number {
  numeros = numeros.sort((a, b) => a - b);

  let longitud: number = numeros.length;
  let minimo: number = 0;
  let maximo: number = longitud - 1;
  let inicial: number = numeros[minimo];

  let todo_mal_numeros: boolean = restriccion(1, 100, longitud); /* [1 : 100] */

  if (todo_mal_numeros) return null;

  if (inicial >= longitud) return longitud;

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let actual: number = numeros[mitad];
    let anterior: number = numeros[mitad - 1];
    let todo_mal_actual: boolean = restriccion(
      0,
      1000,
      actual
    ); /* [0 : 1000] */

    if (todo_mal_actual) return null;

    if (actual >= mitad + 1 && anterior < mitad + 1) return actual;

    if (actual > mitad + 1) maximo = mitad - 1;
    else minimo = mitad + 1;
  }
  return -1;
}

function restriccion(
  minimo: number,
  maximo: number,
  objetivo: number
): boolean {
  if (!(objetivo >= minimo && objetivo <= maximo)) return true;

  return false;
}
export { vector_especial };
