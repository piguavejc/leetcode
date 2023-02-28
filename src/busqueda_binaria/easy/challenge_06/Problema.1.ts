function construccion_escaleras(monedas: number): number {
  let minimo: number = 1;
  let maximo: number = monedas;

  let todo_mal_moneda: boolean = restricciones(monedas, 1, Math.pow(2, 31) - 1); // [1 ; 2^31] intervalo cerrado

  if (todo_mal_moneda) return null;

  while (minimo <= maximo) {
    maximo = maximo - minimo;
    minimo = minimo + 1;
  }
  return minimo - 1;
}
function restricciones(
  numero: number,
  minimo: number,
  maximo: number
): boolean {
  if (!(numero >= minimo && numero <= maximo)) return true;

  return false;
}
export { construccion_escaleras };
