"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscar_matriz = void 0;
function buscar_matriz(numeros, objetivo) {
    let n = numeros.length;
    let todo_mal_n = restriccion_1(n, 100); /* [n ; 100] */
    let todo_mal_objetivo = restriccion_1(objetivo, Math.pow(10, 4)); /* [objetivo ; 10^4]  */
    if (todo_mal_n)
        return null;
    if (todo_mal_objetivo)
        return null;
    for (let i = 0; i < n; i++) {
        let m = numeros[i].length;
        let inicial = numeros[i][0];
        let ultimo = numeros[i][m - 1];
        // if(!(n === m)) return null;/* [n ; m] */
        if (objetivo >= inicial && objetivo <= ultimo) {
            if (inicial === objetivo)
                return true;
            if (ultimo === objetivo)
                return true;
            return buscar_objetivo(numeros[i], objetivo);
        }
    }
    return false;
}
exports.buscar_matriz = buscar_matriz;
function buscar_objetivo(numeros, objetivo) {
    let m = numeros.length;
    let minimo = 1;
    let maximo = m - 1;
    let todo_mal_m = restriccion_1(1, m); /* [1 ; m] */
    if (todo_mal_m)
        return null;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = numeros[mitad];
        let todo_mal_actual = restriccion_1(-Math.pow(10, 4), actual); /* [-10^4 ; actual] */
        if (todo_mal_actual)
            return null;
        if (actual === objetivo)
            return true;
        if (actual > objetivo)
            maximo = mitad - 1;
        else
            minimo = mitad + 1;
    }
    return false;
}
function restriccion_1(indicado, objetivo) {
    if (!(indicado <= objetivo))
        return true;
    return false;
}
