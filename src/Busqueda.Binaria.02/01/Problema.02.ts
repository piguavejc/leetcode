function combinatoria_triangulo(numeros: number[]): number {
  let respuesta: number = 0;
  let longitud: number = numeros.length;

  if (longitud < 3) return respuesta;

  numeros = numeros.sort((a, b) => a - b);

  for (let i = 2; i < longitud; i++) {
    let actual: number = numeros[i];
    let minimo: number = 0;
    let maximo: number = i - 1;

    while (minimo < maximo) {
      let calculo: number = numeros[minimo] + numeros[maximo];

      if (calculo > actual) {
        respuesta += maximo - minimo;
        maximo--;
      } else {
        minimo++;
      }
    }
  }

  return respuesta;
}

export { combinatoria_triangulo };
