function buscar_objetivo(numeros: number[], objetivo: number): number {
  let minimo: number = 0;
  let maximo: number = numeros.length - 1;
  let longitud: number = numeros.length;
  let inicial: number = numeros[minimo];
  let ultimo: number = numeros[maximo];

  let todo_mal_numeros: boolean = restriccion_1(
    1,
    Math.pow(10, 4),
    longitud
  ); /* [1 ; 10^4] */
  let todo_mal_objetivo: boolean = restriccion_2(
    objetivo,
    Math.pow(10, 4)
  ); /* [objetivo ; 10^4] */

  let todo_mal_inicial: boolean = restriccion_2(
    -Math.pow(10, 4),
    inicial
  ); /* [-10^4 ; numeros[0] ] */

  if (todo_mal_numeros || todo_mal_objetivo || todo_mal_inicial) return -1;

  if (inicial === objetivo) return minimo;

  if (ultimo === objetivo) return maximo;

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let actual: number = numeros[mitad];
    let todo_mal_actual: boolean = restriccion_2(
      -Math.pow(10, 4),
      actual
    ); /* [-10^4 ; actual] */

    if (todo_mal_actual) return -1;

    if (actual === objetivo) return mitad;

    if (actual > objetivo) maximo = mitad - 1;
    else minimo = mitad + 1;
  }

  return -1;
}

function restriccion_1(
  minimo: number,
  maximo: number,
  longitud: number
): boolean {
  if (!(longitud >= minimo && longitud <= maximo)) return true;

  return false;
}

function restriccion_2(minimo: number, maximo: number): boolean {
  if (!(minimo < maximo)) return true;

  return false;
}

export { buscar_objetivo };
