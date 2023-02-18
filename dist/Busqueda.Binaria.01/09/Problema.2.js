"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encontrar_doble = void 0;
function encontrar_doble(numeros) {
    numeros = numeros.sort((a, b) => a - b);
    let longitud = numeros.length;
    let todo_mal_n = restriccion(2, 500, longitud); /* [2 ; 500] */
    if (todo_mal_n)
        return null;
    for (let i = 0; i < longitud; i++) {
        let actual = numeros[i];
        let objetivo = actual * 2;
        let respuesta = busqueda_binaria(numeros, objetivo, i);
        if (respuesta)
            return true;
    }
    return false;
}
exports.encontrar_doble = encontrar_doble;
function busqueda_binaria(numeros, objetivo, posicion) {
    let longitud = numeros.length;
    let minimo = 0;
    let maximo = longitud - 1;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = numeros[mitad];
        let todo_mal_actual = restriccion(-Math.pow(10, 3), Math.pow(10, 3), actual); /* [-10^3 ; 10^3] */
        if (mitad === posicion) {
            minimo = mitad + 1;
            continue;
        }
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
function restriccion(minimo, maximo, objetivo) {
    if (!(objetivo >= minimo && objetivo <= maximo))
        return true;
    return false;
}
