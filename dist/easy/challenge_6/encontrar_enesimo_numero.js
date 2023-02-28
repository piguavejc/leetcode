"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encontrar_enesimo_numero = void 0;
function encontrar_enesimo_numero(numeros, objetivo) {
    let minimo = 0;
    let maximo = numeros.length - 1;
    let longitud = numeros.length;
    let suma = comprobar(numeros[maximo], numeros.length);
    let todo_mal_numeros = restriccion(longitud, 1, 1000); // [1 ; 1000] intervalo cerrado
    let todo_mal_objetivo = restriccion(objetivo, 1, 1000); // [1 ; 1000] intervalo cerrado
    if (todo_mal_numeros || todo_mal_objetivo)
        return null;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = numeros[mitad];
        suma = comprobar(actual, mitad + 1);
        let todo_mal_actual = restriccion(actual, 1, 1000); // [1 ; 1000] intervalo cerrado
        if (todo_mal_actual)
            return null;
        if (suma >= objetivo)
            maximo = mitad - 1;
        else
            minimo = mitad + 1;
    }
    if (maximo === -1)
        return objetivo;
    suma = numeros[maximo] + objetivo - comprobar(numeros[maximo], maximo + 1);
    return suma;
}
exports.encontrar_enesimo_numero = encontrar_enesimo_numero;
function comprobar(actual, expectativa) {
    return actual - expectativa;
}
function restriccion(numero, minimo, maximo) {
    if (!(numero >= minimo && numero <= maximo))
        return true;
    return false;
}
