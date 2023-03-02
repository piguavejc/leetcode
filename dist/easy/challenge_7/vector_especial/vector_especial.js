"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vector_especial = void 0;
function vector_especial(numeros) {
    numeros = numeros.sort((a, b) => a - b);
    let longitud = numeros.length;
    let minimo = 0;
    let maximo = longitud - 1;
    let inicial = numeros[minimo];
    let todo_mal_numeros = restriccion(1, 100, longitud); /* [1 : 100] */
    if (todo_mal_numeros)
        return null;
    if (inicial >= longitud)
        return longitud;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = numeros[mitad];
        let anterior = numeros[mitad - 1];
        let todo_mal_actual = restriccion(0, 1000, actual); /* [0 : 1000] */
        if (todo_mal_actual)
            return null;
        if (actual >= mitad + 1 && anterior < mitad + 1)
            return actual;
        if (actual > mitad + 1)
            maximo = mitad - 1;
        else
            minimo = mitad + 1;
    }
    return -1;
}
exports.vector_especial = vector_especial;
function restriccion(minimo, maximo, objetivo) {
    if (!(objetivo >= minimo && objetivo <= maximo))
        return true;
    return false;
}
