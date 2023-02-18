"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscar_objetivo = void 0;
function buscar_objetivo(numeros, objetivo) {
    let minimo = 0;
    let maximo = numeros.length - 1;
    let longitud = numeros.length;
    let inicial = numeros[minimo];
    let ultimo = numeros[maximo];
    let todo_mal_numeros = restriccion_1(1, Math.pow(10, 4), longitud); /* [1 ; 10^4] */
    let todo_mal_objetivo = restriccion_2(objetivo, Math.pow(10, 4)); /* [objetivo ; 10^4] */
    if (todo_mal_numeros || todo_mal_objetivo)
        return -1;
    if (inicial === objetivo)
        return minimo;
    if (ultimo === objetivo)
        return maximo;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = numeros[mitad];
        let todo_mal_actual = restriccion_2(-Math.pow(10, 4), actual); /* [-10^4 ; actual] */
        if (todo_mal_actual)
            return -1;
        if (actual === objetivo)
            return mitad;
        if (actual > objetivo)
            maximo = mitad - 1;
        else
            minimo = mitad + 1;
    }
    return -1;
}
exports.buscar_objetivo = buscar_objetivo;
function restriccion_1(minimo, maximo, longitud) {
    if (!(longitud >= minimo && longitud <= maximo))
        return true;
    return false;
}
function restriccion_2(minimo, maximo) {
    if (!(minimo > maximo))
        return true;
    return false;
}
