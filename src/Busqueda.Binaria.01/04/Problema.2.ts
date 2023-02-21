function buscar_letra_mayor(letras: string[], letra: string): string {
  let longitud: number = letras.length;
  let minimo: number = 0;
  let maximo: number = longitud - 1;
  let todo_mal_letras: boolean = restriccion(
    2,
    Math.pow(10, 4),
    longitud
  ); /* [2 ; 10^4] */

  if (todo_mal_letras) return ":C";

  let objetivo: number = letra.charCodeAt(0);
  let inicial: number = letras[0].charCodeAt(0);
  let ultima: number = letras[maximo].charCodeAt(0);

  if (objetivo < inicial) return letras[minimo];

  if (objetivo >= ultima) return letras[minimo];

  if (objetivo === inicial && objetivo !== letras[minimo + 1].charCodeAt(0))
    return letras[minimo + 1];

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let actual: string = letras[mitad];
    let siguiente: string = letras[mitad + 1];
    let ascii_actual: number = actual.charCodeAt(0);
    let ascii_siguiente: number = actual.charCodeAt(0);

    if (ascii_actual === objetivo && ascii_actual !== ascii_siguiente)
      return siguiente;

    if (mitad > 0 && mitad < longitud) {
      let anterior: string = letras[mitad - 1];
      let ascii_anterior: number = anterior.charCodeAt(0);

      if (objetivo < ascii_actual && objetivo > ascii_anterior)
        return letras[mitad];

      if (ascii_anterior > objetivo && objetivo > ascii_siguiente)
        return letras[mitad - 1];
    }

    if (objetivo < ascii_actual) maximo = mitad - 1;
    else minimo = mitad + 1;
  }

  return letras[maximo + 1];
}
function restriccion(
  minimo: number,
  maximo: number,
  objetivo: number
): boolean {
  if (!(objetivo >= minimo && objetivo <= maximo)) return true;

  return false;
}
export { buscar_letra_mayor };
