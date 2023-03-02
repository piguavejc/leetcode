function vector_especial(numeros:number[]):number{

  numeros = numeros.sort((a,b) => a - b);

  if(numeros[0] >= numeros.length) return numeros.length;

  for(let i = 1; i < numeros.length; i++){
      
      let contador:number = numeros.length - i;
      let actual:number = numeros[i];
      let anterior:number = numeros[i - 1];

      if(actual >= contador && anterior < contador){
          return contador;
      }
  }
  return -1;
}


function restriccion(
  minimo: number,
  maximo: number,
  objetivo: number
): boolean {
  if (!(objetivo >= minimo && objetivo <= maximo)) return true;

  return false;
}
export { vector_especial };
