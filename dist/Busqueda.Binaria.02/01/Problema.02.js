"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combinatoria_triangulo = void 0;
function combinatoria_triangulo(numeros) {
    let respuesta = 0;
    let longitud = numeros.length;
    if (longitud < 3)
        return respuesta;
    numeros = numeros.sort((a, b) => a - b);
    for (let i = 2; i < longitud; i++) {
        let actual = numeros[i];
        let minimo = 0;
        let maximo = i - 1;
        while (minimo < maximo) {
            let calculo = numeros[minimo] + numeros[maximo];
            if (calculo > actual) {
                respuesta += (maximo - minimo);
                maximo--;
            }
            else {
                minimo++;
            }
        }
    }
    return respuesta;
}
exports.combinatoria_triangulo = combinatoria_triangulo;
