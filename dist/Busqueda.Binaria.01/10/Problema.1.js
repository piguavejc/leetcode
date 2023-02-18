"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
function restricciones(minimo, maximo) {
    if (!(minimo <= maximo))
        return true;
    return false;
}
function main(numeros_1, numeros_2) {
    let n = numeros_1.length;
    let m = numeros_2.length;
    let i = 0;
    let j = 0;
    let resultado = [];
    let todo_mal_n = restricciones(0, n); /* [0 ; n] */
    if (todo_mal_n)
        return null;
    numeros_1 = numeros_1.sort((a, b) => a - b);
    numeros_2 = numeros_2.sort((a, b) => a - b);
    while (i < n && j < m) {
        if (numeros_1[i] === numeros_2[j]) {
            resultado.push(numeros_1[i]);
            i++;
            j++;
        }
        else {
            if (numeros_1[i] > numeros_2[j])
                j++;
            else
                i++;
        }
    }
    return resultado;
}
exports.main = main;
