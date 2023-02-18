"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encontar_valor_distancia = void 0;
function encontar_valor_distancia(vector_1, vector_2, distancia) {
    let n = vector_1.length;
    let m = vector_2.length;
    let resultado = 0;
    let todo_mal_n = restricciones(1, n); /* [1 ; n] */
    let todo_mal_m = restricciones(5, 500); /* [m ; 500] */
    if (todo_mal_n || todo_mal_m)
        return null;
    for (let i = 0; i < n; i++) {
        let constante = vector_1[i];
        let minimo = 0;
        let maximo = m - 1;
        let vigilante = false;
        let todo_mal_constante = restricciones(-1000, constante); /* [1 ; n] */
        if (todo_mal_constante)
            return null;
        while (minimo <= maximo && !vigilante) {
            let mitad = Math.trunc((minimo + maximo) / 2);
            let actual = vector_2[mitad];
            let calculo = constante + actual;
            let todo_mal_actual = restricciones_2(0, 100, actual); /* [actual : 1000] */
            if (todo_mal_actual)
                return null;
            if (calculo === distancia)
                vigilante = true;
        }
    }
    return resultado;
}
exports.encontar_valor_distancia = encontar_valor_distancia;
function restricciones(minimo, maximo) {
    if (!(minimo <= maximo))
        return true;
    return false;
}
function restricciones_2(minimo, maximo, objetivo) {
    if (!(objetivo >= minimo && objetivo <= maximo))
        return true;
    return false;
}
