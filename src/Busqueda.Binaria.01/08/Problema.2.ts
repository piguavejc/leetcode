function buscar_matriz(numeros: number[][], objetivo: number): boolean {
  let n: number = numeros.length;
  let todo_mal_n: boolean = restriccion_1(n, 100); /* [n ; 100] */
  let todo_mal_objetivo: boolean = restriccion_1(
    objetivo,
    Math.pow(10, 4)
  ); /* [objetivo ; 10^4]  */

  if (todo_mal_n) return null;
  if (todo_mal_objetivo) return null;

  for (let i = 0; i < n; i++) {
    let m: number = numeros[i].length;
    let inicial: number = numeros[i][0];
    let ultimo: number = numeros[i][m - 1];

    // if(!(n === m)) return null;/* [n ; m] */

    if (objetivo >= inicial && objetivo <= ultimo) {
      if (inicial === objetivo) return true;

      if (ultimo === objetivo) return true;

      return buscar_objetivo(numeros[i], objetivo);
    }
  }

  return false;
}

function buscar_objetivo(numeros: number[], objetivo: number): boolean {
  let m: number = numeros.length;
  let minimo: number = 1;
  let maximo: number = m - 1;
  let todo_mal_m: boolean = restriccion_1(1, m); /* [1 ; m] */

  if (todo_mal_m) return null;

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let actual: number = numeros[mitad];
    let todo_mal_actual: boolean = restriccion_1(
      -Math.pow(10, 4),
      actual
    ); /* [-10^4 ; actual] */

    if (todo_mal_actual) return null;
    if (actual === objetivo) return true;
    if (actual > objetivo) maximo = mitad - 1;
    else minimo = mitad + 1;
  }
  return false;
}

function restriccion_1(indicado: number, objetivo: number): boolean {
  if (!(indicado <= objetivo)) return true;

  return false;
}

export { buscar_matriz };
