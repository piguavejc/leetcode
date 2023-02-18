"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculo_raiz_cuadrada = void 0;
function calculo_raiz_cuadrada(numero) {
    let minimo = 1;
    let maximo = numero - 1;
    let condicion_numero = restriccion_numero(0, Math.pow(2, 31) - 1, numero); /* [0 ; (2^31 - 1)] */
    if (condicion_numero)
        return -1;
    if (minimo === numero)
        return numero;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let calculo = mitad * mitad;
        if (calculo === numero)
            return mitad;
        let calculo_siguiente = (mitad + 1) * (mitad + 1);
        if (calculo < numero && calculo_siguiente > numero)
            return mitad;
        if (calculo > numero)
            maximo = mitad - 1;
        else
            minimo = mitad + 1;
    }
    return 0;
}
exports.calculo_raiz_cuadrada = calculo_raiz_cuadrada;
function restriccion_numero(minimo, maximo, numero) {
    if (!(numero >= minimo && numero <= maximo))
        return true;
    return false;
}
