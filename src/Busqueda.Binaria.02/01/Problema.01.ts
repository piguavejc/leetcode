function suma_vectores_minimo(numeros:number[],objetivo:number):number  {
    
    let resultado:number = 0;    
    let longitud:number = numeros.length;
    
    if(longitud === 0) return 0;
    
    let suma:number[] = new Array(longitud + 1);
    suma[0] = 0;

   for(let i = 0; i < longitud; i++){
        suma[i + 1] = suma[i] + numeros[i];
   }

   

    resultado = Number.MAX_VALUE; 
    let ll:number = 0;

    for(let i = 0; i < longitud; i++){

        let actual:number = suma[i + 1];

        if(actual >= objetivo){
            let ref_actual:number = actual;

            while(ref_actual >= objetivo){
                resultado = Math.min(resultado, (i - ll) + 1);
                ll++;
                ref_actual = actual - suma[ll];
            }
        }
    }
    
    if( resultado === Number.MAX_VALUE ) return 0;

    return resultado;
};

export {suma_vectores_minimo};