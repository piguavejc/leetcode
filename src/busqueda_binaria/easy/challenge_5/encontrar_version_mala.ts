function encontrar_version_mala(numero: number): number {
  let minimo: number = 1;
  let maximo: number = numero;
  let respuesta_actual: boolean = isBadVersion(minimo);
  let resultado: number = 0;

  if (respuesta_actual) return minimo;

  while (minimo <= maximo) {
    let mitad: number = Math.trunc((minimo + maximo) / 2);
    let respuesta: boolean = isBadVersion(mitad);

    if (respuesta) {
      resultado = mitad;
      maximo = mitad - 1;
    } else minimo = mitad + 1;
  }

  let todo_mal: boolean = restriccion(
    1,
    Math.pow(2, 31) - 1,
    numero,
    resultado
  ); /* [1 ; (2^31 - 1)] */

  if (todo_mal) return null;

  return resultado;
}

function restriccion(
  minimo: number,
  maximo: number,
  numero: number,
  objetivo: number
): boolean {
  if (!(objetivo >= minimo && objetivo <= numero)) return true;
  if (!(numero >= objetivo && numero <= maximo)) return true;
  return false;
}

function isBadVersion(numero: number): boolean {
  return true;
}

export { encontrar_version_mala };
