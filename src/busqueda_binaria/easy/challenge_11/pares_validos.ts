function pares_validos(numeros_1: number[], numeros_2: number[]): number {
  let distancia: number = 0;
  let longitud_1: number = numeros_1.length;
  let longitud_2: number = numeros_2.length;
  let i: number = 0;
  let j: number = 0;

  while (i < longitud_1 && j < longitud_2) {
    if (numeros_1[i] > numeros_2[j]) ++i;
    else distancia = Math.max(distancia, j++ - i);
  }

  return distancia;
}

export { pares_validos };
