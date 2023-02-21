function juego_adivinanza(numero: number, objetivo: number): number {
  let minimo: number = 1;
  let maximo: number = numero;
  let longitud: number = numero;

  let todo_mal_numero: boolean = restriccion(
    1,
    Math.pow(2, 31),
    longitud
  ); /* [1 ; 2^31] */
  let todo_mal_objetivo: boolean = restriccion(
    0,
    Math.pow(10, 6),
    objetivo
  ); /* [0 ; 10^6] */

  if (todo_mal_numero || todo_mal_objetivo) return null;

  if (guess(minimo, objetivo) === 0) return minimo;

  if (guess(maximo, objetivo) === 0) return maximo;

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let resultado: number = guess(mitad, objetivo);

    if (resultado === 0) return mitad;

    if (resultado === -1) maximo = mitad - 1;

    if (resultado === 1) minimo = mitad + 1;
  }
}
function restriccion(
  minimo: number,
  maximo: number,
  objetivo: number
): boolean {
  if (!(objetivo >= minimo && objetivo <= maximo)) return true;

  return false;
}
function guess(numero: number, objetivo: number): number {
  if (numero === objetivo) return 0;

  if (numero > objetivo) return -1;

  if (numero < objetivo) return 1;
}
export { juego_adivinanza };
