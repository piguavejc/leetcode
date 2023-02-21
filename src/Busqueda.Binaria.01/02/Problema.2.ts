function indice_de_pico_array_montana(numeros: number[]): number {
  let minimo: number = 0;
  let maximo: number = numeros.length - 1;
  let longitud: number = numeros.length;
  let inicial: number = numeros[minimo];
  let siguiente: number = numeros[minimo + 1];
  let ultimo: number = numeros[maximo];
  let penultimo: number = numeros[maximo - 1];
  let todo_mal_numeros: boolean = restriccion(longitud, 3, Math.pow(10, 4)); // [3 ; 10^4] intervalo cerrado

  if (todo_mal_numeros) return -1;

  if (longitud === 1) return minimo;

  // 2 >= 1
  if (inicial >= siguiente) return minimo;

  // 8 <= 9
  if (penultimo <= ultimo) return maximo;

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let actual: number = numeros[mitad];
    let anterior: number = numeros[mitad - 1];
    siguiente = numeros[mitad + 1];

    let todo_mal_actual: boolean = restriccion(actual, 0, Math.pow(10, 6)); // [0 ; 10^6] intervalo cerrado

    if (todo_mal_actual) return -1;

    if (actual >= anterior && actual >= siguiente) return mitad;

    if (actual <= anterior) maximo = mitad - 1;
    else minimo = mitad + 1;
  }
}

function restriccion(numero: number, minimo: number, maximo: number): boolean {
  if (!(numero >= minimo && numero <= maximo)) return true;

  return false;
}

export { indice_de_pico_array_montana };
