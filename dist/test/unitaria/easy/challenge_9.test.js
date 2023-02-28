"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const challenges_9_1 = require("../../../easy/challenge_9");
const challenges_9_2 = require("../../../easy/challenge_9");
test("k filas mas debil matriz. test 1", () => {
    let entrada = [
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1],
    ];
    let objetivo = 3;
    let salida = [2, 0, 3];
    let respuesta = (0, challenges_9_1.k_filas_mas_debil_matriz)(entrada, objetivo);
    expect(respuesta).toStrictEqual(expect.arrayContaining(salida));
});
test("k filas mas debil matriz. test 2", () => {
    let entrada = [
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
    ];
    let objetivo = 2;
    let salida = [0, 2];
    let respuesta = (0, challenges_9_1.k_filas_mas_debil_matriz)(entrada, objetivo);
    expect(respuesta).toStrictEqual(expect.arrayContaining(salida));
});
test("k filas mas debil matriz. test 3", () => {
    let entrada = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
    ];
    let objetivo = 1;
    let salida = [0];
    let respuesta = (0, challenges_9_1.k_filas_mas_debil_matriz)(entrada, objetivo);
    expect(respuesta).toStrictEqual(expect.arrayContaining(salida));
});
test("k filas mas debil matriz. test 4", () => {
    let entrada = [
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 1],
    ];
    let objetivo = 4;
    let salida = [0];
    let respuesta = (0, challenges_9_1.k_filas_mas_debil_matriz)(entrada, objetivo);
    expect(respuesta).toStrictEqual(expect.arrayContaining(salida));
});
test("k filas mas debil matriz. test 5", () => {
    let entrada = [
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1],
    ];
    let objetivo = 4;
    let salida = [2, 0, 3, 1];
    let respuesta = (0, challenges_9_1.k_filas_mas_debil_matriz)(entrada, objetivo);
    expect(respuesta).toStrictEqual(expect.arrayContaining(salida));
});
/* encontrar doble */
test("encontrar doble. test 1", () => {
    let entrada = [7, 1, 14, 11];
    let salida = true;
    let respuesta = (0, challenges_9_2.encontrar_doble)(entrada);
    expect(respuesta).toBe(salida);
});
test("encontrar doble. test 2", () => {
    let entrada = [3, 1, 7, 11];
    let salida = false;
    let respuesta = (0, challenges_9_2.encontrar_doble)(entrada);
    expect(respuesta).toBe(salida);
});
test("encontrar doble. test 3", () => {
    let entrada = [10, 2, 5, 3];
    let salida = true;
    let respuesta = (0, challenges_9_2.encontrar_doble)(entrada);
    expect(respuesta).toBe(salida);
});
test("encontrar doble. test 4", () => {
    let entrada = [-2, 0, 10, -19, 4, 6, -8];
    let salida = false;
    let respuesta = (0, challenges_9_2.encontrar_doble)(entrada);
    expect(respuesta).toBe(salida);
});
