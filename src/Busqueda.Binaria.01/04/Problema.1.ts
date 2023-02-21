function calculo_raiz_cuadrada(numero: number): number {
  let minimo: number = 1;
  let maximo: number = numero - 1;
  let condicion_numero: boolean = restriccion_numero(
    0,
    Math.pow(2, 31) - 1,
    numero
  ); /* [0 ; (2^31 - 1)] */

  if (condicion_numero) return -1;

  if (minimo === numero) return numero;

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);

    let calculo: number = mitad * mitad;

    if (calculo === numero) return mitad;

    let calculo_siguiente: number = (mitad + 1) * (mitad + 1);

    if (calculo < numero && calculo_siguiente > numero) return mitad;

    if (calculo > numero) maximo = mitad - 1;
    else minimo = mitad + 1;
  }

  return 0;
}
function restriccion_numero(
  minimo: number,
  maximo: number,
  numero: number
): boolean {
  if (!(numero >= minimo && numero <= maximo)) return true;
  return false;
}
export { calculo_raiz_cuadrada };
