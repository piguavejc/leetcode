function encontrar_doble(numeros: number[]): boolean {
  numeros = numeros.sort((a, b) => a - b);
  let longitud: number = numeros.length;
  let todo_mal_n: boolean = restriccion(2, 500, longitud); /* [2 ; 500] */

  if (todo_mal_n) return null;

  for (let i: number = 0; i < longitud; i++) {
    let actual = numeros[i];
    let objetivo: number = actual * 2;
    let respuesta: boolean = busqueda_binaria(numeros, objetivo, i);

    if (respuesta) return true;
  }
  return false;
}

function busqueda_binaria(
  numeros: number[],
  objetivo: number,
  posicion: number
): boolean {
  let longitud: number = numeros.length;
  let minimo: number = 0;
  let maximo: number = longitud - 1;

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let actual: number = numeros[mitad];
    let todo_mal_actual: boolean = restriccion(
      -Math.pow(10, 3),
      Math.pow(10, 3),
      actual
    ); /* [-10^3 ; 10^3] */

    if (mitad === posicion) {
      minimo = mitad + 1;
      continue;
    }
    if (todo_mal_actual) return null;

    if (actual === objetivo) return true;

    if (actual > objetivo) maximo = mitad - 1;
    else minimo = mitad + 1;
  }

  return false;
}

function restriccion(
  minimo: number,
  maximo: number,
  objetivo: number
): boolean {
  if (!(objetivo >= minimo && objetivo <= maximo)) return true;
  return false;
}

export { encontrar_doble };
