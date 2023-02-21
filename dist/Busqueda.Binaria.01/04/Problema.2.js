"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscar_letra_mayor = void 0;
function buscar_letra_mayor(letras, letra) {
    let longitud = letras.length;
    let minimo = 0;
    let maximo = longitud - 1;
    let todo_mal_letras = restriccion(2, Math.pow(10, 4), longitud); /* [2 ; 10^4] */
    if (todo_mal_letras)
        return ":C";
    let objetivo = letra.charCodeAt(0);
    let inicial = letras[0].charCodeAt(0);
    let ultima = letras[maximo].charCodeAt(0);
    if (objetivo < inicial)
        return letras[minimo];
    if (objetivo >= ultima)
        return letras[minimo];
    if (objetivo === inicial && objetivo !== letras[minimo + 1].charCodeAt(0))
        return letras[minimo + 1];
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let actual = letras[mitad];
        let siguiente = letras[mitad + 1];
        let ascii_actual = actual.charCodeAt(0);
        let ascii_siguiente = actual.charCodeAt(0);
        if (ascii_actual === objetivo && ascii_actual !== ascii_siguiente)
            return siguiente;
        if (mitad > 0 && mitad < longitud) {
            let anterior = letras[mitad - 1];
            let ascii_anterior = anterior.charCodeAt(0);
            if (objetivo < ascii_actual && objetivo > ascii_anterior)
                return letras[mitad];
            if (ascii_anterior > objetivo && objetivo > ascii_siguiente)
                return letras[mitad - 1];
        }
        if (objetivo < ascii_actual)
            maximo = mitad - 1;
        else
            minimo = mitad + 1;
    }
    return letras[maximo + 1];
}
exports.buscar_letra_mayor = buscar_letra_mayor;
function restriccion(minimo, maximo, objetivo) {
    if (!(objetivo >= minimo && objetivo <= maximo))
        return true;
    return false;
}
