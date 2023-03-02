"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const challenges_10_1 = require("../../../easy/challenge_10");
const challenges_10_2 = require("../../../easy/challenge_10");
//interseccion
test("interseccion. Test 1", () => {
    let numeros_1 = [1, 2, 2, 1];
    let numeros_2 = [2, 2];
    let salidad = [2, 2];
    let respuesta = (0, challenges_10_1.main)(numeros_1, numeros_2);
    expect(respuesta).toStrictEqual(expect.arrayContaining(salidad));
});
test("interseccion. Test 2", () => {
    let numeros_1 = [4, 9, 5];
    let numeros_2 = [9, 4, 9, 8, 4];
    let salidad = [4, 9];
    let respuesta = (0, challenges_10_1.main)(numeros_1, numeros_2);
    expect(respuesta).toStrictEqual(expect.arrayContaining(salidad));
});
test("interseccion. Test 3", () => {
    let numeros_1 = [1, 2, 2, 1];
    let numeros_2 = [2];
    let salidad = [2];
    let respuesta = (0, challenges_10_1.main)(numeros_1, numeros_2);
    expect(respuesta).toStrictEqual(expect.arrayContaining(salidad));
});
//Suma de 2 numeros
test("suma de 2 numeros. Test 1", () => {
    let entrada = 5;
    let salida = true;
    let resultado = (0, challenges_10_2.suma_numeros_cudrados)(entrada);
    expect(resultado).toBe(salida);
});
test("suma de 2 numeros. Test 2", () => {
    let entrada = 2;
    let salida = true;
    let resultado = (0, challenges_10_2.suma_numeros_cudrados)(entrada);
    expect(resultado).toBe(salida);
});
test("suma de 2 numeros. Test 3", () => {
    let entrada = 1;
    let salida = true;
    let resultado = (0, challenges_10_2.suma_numeros_cudrados)(entrada);
    expect(resultado).toBe(salida);
});
test("suma de 2 numeros. Test 4", () => {
    let entrada = 9;
    let salida = true;
    let resultado = (0, challenges_10_2.suma_numeros_cudrados)(entrada);
    expect(resultado).toBe(salida);
});
