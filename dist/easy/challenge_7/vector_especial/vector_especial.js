"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vector_especial = void 0;
function vector_especial(numeros) {
    numeros = numeros.sort((a, b) => a - b);
    if (numeros[0] >= numeros.length)
        return numeros.length;
    for (let i = 1; i < numeros.length; i++) {
        let contador = numeros.length - i;
        let actual = numeros[i];
        let anterior = numeros[i - 1];
        if (actual >= contador && anterior < contador) {
            return contador;
        }
    }
    return -1;
}
exports.vector_especial = vector_especial;
function restriccion(minimo, maximo, objetivo) {
    if (!(objetivo >= minimo && objetivo <= maximo))
        return true;
    return false;
}
