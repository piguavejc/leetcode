"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Problema_1_1 = require("../../../Busqueda.Binaria.01/10/Problema.1");
const Problema_2_1 = require("../../../Busqueda.Binaria.01/10/Problema.2");
test("interseccion. Test 1", () => {
    let numeros_1 = [1, 2, 2, 1];
    let numeros_2 = [2, 2];
    let salidad = [2, 2];
    let respuesta = (0, Problema_1_1.main)(numeros_1, numeros_2);
    expect(respuesta).toStrictEqual(expect.arrayContaining(salidad));
});
test("interseccion. Test 2", () => {
    let numeros_1 = [4, 9, 5];
    let numeros_2 = [9, 4, 9, 8, 4];
    let salidad = [4, 9];
    let respuesta = (0, Problema_1_1.main)(numeros_1, numeros_2);
    expect(respuesta).toStrictEqual(expect.arrayContaining(salidad));
});
test("interseccion. Test 3", () => {
    let numeros_1 = [1, 2, 2, 1];
    let numeros_2 = [2];
    let salidad = [2];
    let respuesta = (0, Problema_1_1.main)(numeros_1, numeros_2);
    expect(respuesta).toStrictEqual(expect.arrayContaining(salidad));
});
test("suma de 2 numeros. Test 1", () => {
    let entrada = 5;
    let salida = true;
    let resultado = (0, Problema_2_1.suma_numeros_cudrados)(entrada);
    expect(resultado).toBe(salida);
});
test("suma de 2 numeros. Test 2", () => {
    let entrada = 3;
    let salida = false;
    let resultado = (0, Problema_2_1.suma_numeros_cudrados)(entrada);
    expect(resultado).toBe(salida);
});
test("suma de 2 numeros. Test 3", () => {
    let entrada = 6;
    let salida = false;
    let resultado = (0, Problema_2_1.suma_numeros_cudrados)(entrada);
    expect(resultado).toBe(salida);
});
test("suma de 2 numeros. Test 5", () => {
    let entrada = 2;
    let salida = true;
    let resultado = (0, Problema_2_1.suma_numeros_cudrados)(entrada);
    expect(resultado).toBe(salida);
});
test("suma de 2 numeros. Test 6", () => {
    let entrada = 1;
    let salida = true;
    let resultado = (0, Problema_2_1.suma_numeros_cudrados)(entrada);
    expect(resultado).toBe(salida);
});
test("suma de 2 numeros. Test ", () => {
    let entrada = 9;
    let salida = true;
    let resultado = (0, Problema_2_1.suma_numeros_cudrados)(entrada);
    expect(resultado).toBe(salida);
});
test("suma de 2 numeros. Test 4", () => {
    let entrada = 1000;
    let salida = true;
    let resultado = (0, Problema_2_1.suma_numeros_cudrados)(entrada);
    expect(resultado).toBe(salida);
});
