function encontar_valor_distancia(vector_1: number[], vector_2: number[], distancia: number): number {
    let n: number = vector_1.length;
    let m: number = vector_2.length;
    let resultado: number = 0;
    let todo_mal_n: boolean = restricciones(1, n); /* [1 ; n] */
    let todo_mal_m: boolean = restricciones(5, 500); /* [m ; 500] */

    if (todo_mal_n || todo_mal_m) return null;

    for (let i = 0; i < n; i++) {
        let constante: number = vector_1[i];
        let minimo: number = 0;
        let maximo: number = m - 1;
        let vigilante: boolean = false;
        let todo_mal_constante: boolean = restricciones(-1000, constante); /* [1 ; n] */

        if (todo_mal_constante) return null;

        while (minimo <= maximo && !vigilante) {
            let mitad: number = Math.trunc((minimo + maximo) / 2);
            let actual = vector_2[mitad];
            let calculo: number = constante + actual;
            let todo_mal_actual: boolean = restricciones_2(0, 100, actual); /* [actual : 1000] */

            if (todo_mal_actual) return null;

            if (calculo === distancia) vigilante = true;
        }
    }
    return resultado;
}
function restricciones(minimo: number, maximo: number): boolean {
    if (!(minimo <= maximo)) return true;
    return false;
}
function restricciones_2(minimo: number, maximo: number, objetivo: number): boolean {
    if (!(objetivo >= minimo && objetivo <= maximo)) return true;
    return false;
}
export { encontar_valor_distancia };
