function encontrar_enesimo_numero(numeros: number[], objetivo: number): number {
  let minimo: number = 0;
  let maximo: number = numeros.length - 1;
  let longitud: number = numeros.length;

  let suma: number = comprobar(numeros[maximo], numeros.length);

  let todo_mal_numeros: boolean = restriccion(longitud, 1, 1000); // [1 ; 1000] intervalo cerrado
  let todo_mal_objetivo: boolean = restriccion(objetivo, 1, 1000); // [1 ; 1000] intervalo cerrado

  if (todo_mal_numeros || todo_mal_objetivo) return null;

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let actual: number = numeros[mitad];
    suma = comprobar(actual, mitad + 1);

    let todo_mal_actual: boolean = restriccion(actual, 1, 1000); // [1 ; 1000] intervalo cerrado

    if (todo_mal_actual) return null;

    if (suma >= objetivo) maximo = mitad - 1;
    else minimo = mitad + 1;
  }

  if (maximo === -1) return objetivo;

  suma = numeros[maximo] + objetivo - comprobar(numeros[maximo], maximo + 1);
  return suma;
}

function comprobar(actual: number, expectativa: number): number {
  return actual - expectativa;
}

function restriccion(numero: number, minimo: number, maximo: number): boolean {
  if (!(numero >= minimo && numero <= maximo)) return true;

  return false;
}

export { encontrar_enesimo_numero };
