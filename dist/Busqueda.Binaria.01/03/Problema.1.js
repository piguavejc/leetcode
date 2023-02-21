"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.es_cuadrado_perfecto = void 0;
function es_cuadrado_perfecto(numero) {
    let minimo = 1;
    let maximo = numero;
    let todo_mal_numeros = restriccion(1, Math.pow(2, 31) - 1, numero); // [1 ; (2^31 - 1)] interbalo cerrado
    if (todo_mal_numeros)
        return null;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = mitad;
        let resultado = actual * actual;
        if (resultado === numero)
            return true;
        if (resultado > numero)
            maximo = mitad - 1;
        else
            minimo = mitad + 1;
    }
    return false;
}
exports.es_cuadrado_perfecto = es_cuadrado_perfecto;
function restriccion(minimo, maximo, numero) {
    if (!(numero >= minimo && numero <= maximo))
        return true;
    return false;
}
