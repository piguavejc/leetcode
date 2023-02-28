"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.k_filas_mas_debil_matriz = void 0;
function k_filas_mas_debil_matriz(numeros, objetivo) {
    let n = numeros.length;
    let respuesta = new Array(n);
    let todo_mal_n = restriccion_1(2, n); /* [2 ; n] */
    if (todo_mal_n)
        return null;
    for (let i = 0; i < n; i++) {
        let m = numeros[i].length;
        let inicial = numeros[i][0];
        let final = numeros[i][m - 1];
        let todo_mal_objetivo = restriccion_3(1, n, objetivo); /* [1 ; m] */
        // if (!(n === m)) return null; /* [n ; m] */
        if (todo_mal_objetivo)
            return null;
        if (inicial === 1 && final === 1) {
            respuesta[i] = new Respuesta(i, m);
            continue;
        }
        if (!(inicial === 0 && final === 0)) {
            let fila = numeros[i];
            let conteo = busqueda_soldado(fila);
            respuesta[i] = new Respuesta(i, conteo);
        }
        else
            respuesta[i] = new Respuesta(i, 0);
    }
    respuesta = respuesta.sort((a, b) => {
        return a.obtener_conteo() - b.obtener_conteo();
    });
    let solucion = [];
    for (let i = 0; i < respuesta.length; i++) {
        let actual = respuesta[i];
        const indice = actual.obtener_indice();
        if (i < objetivo)
            solucion.push(indice);
    }
    return solucion;
}
exports.k_filas_mas_debil_matriz = k_filas_mas_debil_matriz;
function busqueda_soldado(fila) {
    let longitud = fila.length;
    let minimo = 0;
    let maximo = longitud - 1;
    let todo_mal_m = restriccion_1(longitud, 100); /* [m ; 100] */
    if (todo_mal_m)
        return null;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let anterior = fila[mitad - 1];
        let actual = fila[mitad];
        let siguiente = fila[mitad + 1];
        let todo_mal_actual = restriccion_2(actual); /* [0 ; 1] */
        if (todo_mal_actual)
            return null;
        if (anterior === 1 && actual === 0)
            return mitad;
        if (mitad < longitud) {
            if (actual === 1 && siguiente === 0)
                return mitad + 1;
        }
        if (anterior === 0)
            maximo = mitad - 1;
        if (siguiente === 1)
            minimo = mitad + 1;
    }
    return 0;
}
function restriccion_1(minimo, maximo) {
    if (!(minimo <= maximo))
        return true;
    return false;
}
function restriccion_2(objetivo) {
    if (!(objetivo === 1 || objetivo === 0))
        return true;
    return false;
}
function restriccion_3(minimo, maximo, objetivo) {
    if (!(objetivo >= minimo && objetivo <= maximo))
        return true;
    return false;
}
class Respuesta {
    constructor(indice, conteo) {
        this.indice = indice;
        this.conteo = conteo;
    }
    obtener_indice() {
        return this.indice;
    }
    obtener_conteo() {
        return this.conteo;
    }
}
