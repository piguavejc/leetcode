function encontar_valor_distancia(
  vector_1: number[],
  vector_2: number[],
  distancia: number
): number {
  let resultado = 0;

  for (let i = 0; i < vector_1.length; i++) {
    let buscando: boolean = false;

    for (let j = 0; j < vector_2.length && !buscando; j++) {
      if (Math.abs(vector_1[i] - vector_2[j]) <= distancia) buscando = true;
    }
    resultado += buscando ? 0 : 1;
  }
  return resultado;
}
export { encontar_valor_distancia };
