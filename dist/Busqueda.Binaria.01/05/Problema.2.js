"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encontrar_posicion_final_e_inicial = void 0;
function encontrar_posicion_final_e_inicial(enteros, objetivo) {
    let minimo = 0;
    let maximo = enteros.length - 1;
    let longitud = enteros.length;
    let inicial = enteros[minimo];
    let ultimo = enteros[maximo];
    let todo_mal_n = restriccion(longitud, 0, Math.pow(10, 5)); // [0 ; 10^5] intervalo cerrado
    let todo_mal_objetivo = restriccion(objetivo, -Math.pow(10, 5), Math.pow(10, 5)); // [-10^5 ; 10^5] intervalo cerrado
    if (todo_mal_n || todo_mal_objetivo)
        return [-1, -1];
    // [] ---- 1
    if (maximo < 0)
        return [-1, -1];
    //[2] --- 1
    if (objetivo !== inicial && maximo === 0)
        return [-1, -1];
    // [2,2,2] --- 2
    if (inicial === objetivo && ultimo === objetivo)
        return [minimo, maximo];
    let menor = encontar_menor_indice(enteros, objetivo);
    let mayor = encontar_mayor_indice(enteros, objetivo);
    return [menor, mayor];
}
exports.encontrar_posicion_final_e_inicial = encontrar_posicion_final_e_inicial;
function encontar_menor_indice(numeros, objetivo) {
    let minimo = 0;
    let maximo = numeros.length - 1;
    let indice_menor = -1;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = numeros[mitad];
        let todo_mal_actual = restriccion(actual, -Math.pow(10, 5), Math.pow(10, 5)); // [-10^9 ; 10^9] intervalo cerrado
        if (todo_mal_actual)
            return -1;
        if (actual === objetivo)
            indice_menor = mitad;
        if (objetivo <= actual)
            maximo = mitad - 1;
        else
            minimo = mitad + 1;
    }
    return indice_menor;
}
function encontar_mayor_indice(numeros, objetivo) {
    let minimo = 0;
    let maximo = numeros.length - 1;
    let indice_mayor = -1;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = numeros[mitad];
        let todo_mal_actual = restriccion(actual, -Math.pow(10, 5), Math.pow(10, 5)); // [-10^9 ; 10^9] intervalo cerrado
        if (todo_mal_actual)
            return -1;
        if (actual === objetivo)
            indice_mayor = mitad;
        if (objetivo >= actual)
            minimo = mitad + 1;
        else
            maximo = mitad - 1;
    }
    return indice_mayor;
}
function restriccion(numero, minimo, maximo) {
    if (!(numero >= minimo && numero <= maximo))
        return true;
    return false;
}
