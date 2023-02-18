"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Problema_1_1 = require("../../../Busqueda.Binaria.01/07/Problema.1");
const Problema_2_1 = require("../../../Busqueda.Binaria.01/07/Problema.2");
const datos_1 = require("./datos");
test("Suma. Test 1", () => {
    let numeros = [2, 7, 11, 15];
    let objetivo = 9;
    let salida = [1, 2];
    let resultado = (0, Problema_1_1.suma_vectores)(objetivo, numeros);
    expect(resultado).toStrictEqual(salida);
});
test("Suma. Test 2", () => {
    let numeros = [2, 3, 4];
    let objetivo = 6;
    let salida = [1, 3];
    let resultado = (0, Problema_1_1.suma_vectores)(objetivo, numeros);
    expect(resultado).toStrictEqual(salida);
});
test("Suma. Test 3", () => {
    let numeros = [-1, 0];
    let objetivo = -1;
    let salida = [1, 2];
    let resultado = (0, Problema_1_1.suma_vectores)(objetivo, numeros);
    expect(resultado).toStrictEqual(salida);
});
test("Suma. Test 4", () => {
    let numeros = [1, 2, 3, 4, 5, 6, 7];
    let objetivo = 9;
    let salida = [2, 7];
    let resultado = (0, Problema_1_1.suma_vectores)(objetivo, numeros);
    expect(resultado).toStrictEqual(salida);
});
test("Suma. Test 5", () => {
    let numeros = [3, 3, 3, 4];
    let objetivo = 6;
    let salida = [1, 2];
    let resultado = (0, Problema_1_1.suma_vectores)(objetivo, numeros);
    expect(resultado).toEqual(expect.arrayContaining(salida));
});
test("Suma. Test 6", () => {
    let numeros = datos_1.datos_3;
    let objetivo = 542;
    let salida = [24, 32];
    let resultado = (0, Problema_1_1.suma_vectores)(objetivo, numeros);
    expect(resultado).toEqual(expect.arrayContaining(salida));
});
test("Suma. Test 8", () => {
    let numeros = [
        12, 83, 104, 129, 140, 184, 199, 300, 306, 312, 321, 325, 341, 344, 349, 356, 370, 405, 423, 444, 446, 465, 471,
        491, 500, 506, 508, 530, 539, 543, 569, 591, 606, 607, 612, 614, 623, 627, 645, 662, 670, 685, 689, 726, 731,
        737, 744, 747, 764, 773, 778, 787, 802, 805, 811, 819, 829, 841, 879, 905, 918, 918, 929, 955, 997,
    ];
    let objetivo = 789;
    let salida = [3, 42];
    let resultado = (0, Problema_1_1.suma_vectores)(objetivo, numeros);
    expect(resultado).toEqual(expect.arrayContaining(salida));
});
/* Vector especial */
test("vector_especial. Test 1", () => {
    let numeros = [3, 5];
    let salidad = 2;
    let respuesta = (0, Problema_2_1.vector_especial)(numeros);
    expect(respuesta).toBe(salidad);
});
test("vector_especial. Test 2", () => {
    let numeros = [0, 0];
    let salidad = -1;
    let respuesta = (0, Problema_2_1.vector_especial)(numeros);
    expect(respuesta).toBe(salidad);
});
test("vector_especial. Test 3", () => {
    let numeros = [0, 4, 3, 0, 4];
    let salidad = 3;
    let respuesta = (0, Problema_2_1.vector_especial)(numeros);
    expect(respuesta).toBe(salidad);
});
test("vector_especial. Test 4", () => {
    let numeros = [1, 3, 4, 5];
    let salidad = 3;
    let respuesta = (0, Problema_2_1.vector_especial)(numeros);
    expect(respuesta).toBe(salidad);
});
