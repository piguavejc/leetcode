"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suma_vectores_minimo = void 0;
function suma_vectores_minimo(numeros, objetivo) {
    let resultado = 0;
    let longitud = numeros.length;
    if (longitud === 0)
        return 0;
    let suma = new Array(longitud + 1);
    suma[0] = 0;
    for (let i = 0; i < longitud; i++) {
        suma[i + 1] = suma[i] + numeros[i];
    }
    resultado = Number.MAX_VALUE;
    let ll = 0;
    for (let i = 0; i < longitud; i++) {
        let actual = suma[i + 1];
        if (actual >= objetivo) {
            let ref_actual = actual;
            while (ref_actual >= objetivo) {
                resultado = Math.min(resultado, i - ll + 1);
                ll++;
                ref_actual = actual - suma[ll];
            }
        }
    }
    if (resultado === Number.MAX_VALUE)
        return 0;
    return resultado;
}
exports.suma_vectores_minimo = suma_vectores_minimo;
