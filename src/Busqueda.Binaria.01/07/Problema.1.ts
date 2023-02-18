function suma_vectores(objetivo: number, numeros: number[]): number[] {
    let longitud: number = numeros.length;
    let todo_mal_objetivo: boolean = restricciones(-1000, 1000, objetivo); /* [-1000 ; 1000] */
    let todo_mal_numeros: boolean = restricciones(2, 3 * Math.pow(10, 4), longitud); /* [2 ; (3 *10^4)] */

    if (todo_mal_objetivo || todo_mal_numeros) return null;

    for (let i = 0; i < longitud; i++) {
        const actual: number = numeros[i];
        let indicado: number = objetivo - actual;

        const { comprobacion, indice } = buscar_pareja(numeros, indicado, i);

        if (comprobacion) {
            if (indice > i) return [i + 1, indice + 1];
            else return [indice + 1, i + 1];
        }
    }
}

function buscar_pareja(numeros: number[], objetivo: number, excluido: number): any {
    let longitud: number = numeros.length;
    let minimo: number = 0;
    let maximo: number = longitud - 1;

    while (minimo <= maximo) {
        let mitad: number = Math.trunc((minimo + maximo) / 2);
        let actual: number = numeros[mitad];
        let todo_mal_actual: boolean = restricciones(-1000, 1000, actual); /* [-1000; 1000] */

        if (todo_mal_actual) return null;

        if (objetivo === actual && mitad !== excluido) {
            return { comprobacion: true, indice: mitad };
        }

        if (actual >= objetivo) maximo = mitad - 1;
        else minimo = mitad + 1;
    }
    return { comprobacion: false, indice: -1 };
}

function restricciones(minimo: number, maximo: number, objetivo: number): boolean {
    if (!(objetivo >= minimo && objetivo <= maximo)) return true;

    return false;
}

export { suma_vectores };
