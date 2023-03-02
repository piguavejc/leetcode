"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encontar_valor_distancia = void 0;
function encontar_valor_distancia(vector_1, vector_2, distancia) {
    let resultado = 0;
    for (let i = 0; i < vector_1.length; i++) {
        let buscando = false;
        for (let j = 0; j < vector_2.length && !buscando; j++) {
            if (Math.abs(vector_1[i] - vector_2[j]) <= distancia)
                buscando = true;
        }
        resultado += buscando ? 0 : 1;
    }
    return resultado;
}
exports.encontar_valor_distancia = encontar_valor_distancia;
