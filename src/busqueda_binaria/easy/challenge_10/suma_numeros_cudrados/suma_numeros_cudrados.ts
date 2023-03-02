function suma_numeros_cudrados(objetivo: number): boolean {
    
  let sqrt:number = Math.trunc(Math.sqrt(objetivo));
  let todo_mal_objetivo: boolean = restriccion(0, Math.pow(2, 31), objetivo); /* [0 ; 2^31] */

  if(objetivo === 0) return true;
  
  if (todo_mal_objetivo) return null;

  while(sqrt  >  0){

      let a2:number = sqrt * sqrt;
      let indicado:number = objetivo - a2;
      let respuesta:boolean = busqueda_binaria(indicado);
          
      if(respuesta) return true;
      
      sqrt -= 1;
  }
  return false;
}
function busqueda_binaria(indicado:number):boolean {
  let minimo:number = 0;
  let maixmo:number = indicado;

  while(minimo <= maixmo){

      let mitad:number = Math.trunc((minimo + maixmo) / 2);
      let actual:number = mitad;
      let cuadrado:number = actual * actual;

      
      if(cuadrado === indicado) return true;

      if(cuadrado > indicado) maixmo = mitad - 1;
      else minimo = mitad + 1;
  }

  return false;
}
function restriccion(minimo: number, maixmo: number, objetivo: number): boolean {
  if (!(objetivo >= minimo && objetivo <= maixmo)) return true;

  return false;
}
export { suma_numeros_cudrados };
