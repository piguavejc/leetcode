"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtener_menor_numero = void 0;
function obtener_menor_numero(numeros, objetivo) {
    let longitud = numeros.length;
    let minimo = 0;
    let maximo = longitud - 1;
    let inicial = numeros[minimo];
    let ultimo = numeros[maximo];
    if (inicial === objetivo)
        return minimo;
    if (ultimo === objetivo)
        return maximo;
    if (longitud === 2)
        return -1;
    /* que el arreglo este ordenado */
    if (inicial < ultimo)
        return busqueda(numeros, objetivo, minimo, maximo);
    /* que el mayor se encuentre al inicio */
    if (inicial > numeros[minimo + 1])
        return busqueda(numeros, objetivo, minimo + 1, maximo);
    /* que el menor se encuentre al final */
    if (ultimo < numeros[maximo - 1])
        return busqueda(numeros, objetivo, minimo, maximo - 1);
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = numeros[mitad];
        let siguiente = numeros[mitad + 1];
        let anterior = numeros[mitad - 1];
        if (objetivo === anterior)
            return mitad - 1;
        if (objetivo === actual)
            return mitad;
        if (objetivo === siguiente)
            return mitad + 1;
        if (actual > siguiente) {
            /* [inicial ; actual] */
            let x2 = inicial;
            let y2 = actual;
            let rango_1 = rango(x2, y2, objetivo);
            if (rango_1)
                return busqueda(numeros, objetivo, 0, mitad);
            /* [siguiente ; ultimo] */
            let x1 = siguiente;
            let y1 = numeros[longitud - 1];
            let rango_2 = rango(x1, y1, objetivo);
            if (rango_2)
                return busqueda(numeros, objetivo, mitad + 1, longitud - 1);
            return -1;
        }
        if (actual < numeros[0] && actual < numeros[longitud - 1])
            maximo = mitad - 1;
        else
            minimo = mitad + 1;
    }
    return -1;
}
exports.obtener_menor_numero = obtener_menor_numero;
function busqueda(numeros, objetivo, minimo, maximo) {
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = numeros[mitad];
        if (actual === objetivo)
            return mitad;
        if (actual > objetivo)
            maximo = maximo - 1;
        else
            minimo = minimo + 1;
    }
    return -1;
}
function rango(minimo, maximo, objetivo) {
    return objetivo >= minimo && objetivo <= maximo;
}
