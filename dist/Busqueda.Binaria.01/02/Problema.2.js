"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indice_de_pico_array_montana = void 0;
function indice_de_pico_array_montana(numeros) {
    let minimo = 0;
    let maximo = numeros.length - 1;
    let longitud = numeros.length;
    let inicial = numeros[minimo];
    let siguiente = numeros[minimo + 1];
    let ultimo = numeros[maximo];
    let penultimo = numeros[maximo - 1];
    let todo_mal_numeros = restriccion(longitud, 3, Math.pow(10, 4)); // [3 ; 10^4] intervalo cerrado
    if (todo_mal_numeros)
        return -1;
    if (longitud === 1)
        return minimo;
    // 2 >= 1
    if (inicial >= siguiente)
        return minimo;
    // 8 <= 9
    if (penultimo <= ultimo)
        return maximo;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = numeros[mitad];
        let anterior = numeros[mitad - 1];
        siguiente = numeros[mitad + 1];
        let todo_mal_actual = restriccion(actual, 0, Math.pow(10, 6)); // [0 ; 10^6] intervalo cerrado
        if (todo_mal_actual)
            return -1;
        if (actual >= anterior && actual >= siguiente)
            return mitad;
        if (actual <= anterior)
            maximo = mitad - 1;
        else
            minimo = mitad + 1;
    }
}
exports.indice_de_pico_array_montana = indice_de_pico_array_montana;
function restriccion(numero, minimo, maximo) {
    if (!(numero >= minimo && numero <= maximo))
        return true;
    return false;
}
