function encontrar_objetivo(numeros: number[], objetivo: number): number {
  let minimo: number = 0;
  let maximo: number = numeros.length - 1;
  let longitud: number = numeros.length;
  let inicial: number = numeros[minimo];
  let final: number = numeros[maximo];

  let todo_mal_numeros: boolean = restriccion(longitud, 1, Math.pow(10, 4)); // [1 ; 10^4] intervalo cerrado
  let todo_mal_objetivo: boolean = restriccion(
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
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let actual: number = numeros[mitad];
    let anterior: number = numeros[mitad - 1];
    let todo_mal_actual: boolean = restriccion(
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

function restriccion(numero: number, minimo: number, maximo: number): boolean {
  if (!(numero >= minimo && numero <= maximo)) return true;

  return false;
}

export { encontrar_objetivo };
