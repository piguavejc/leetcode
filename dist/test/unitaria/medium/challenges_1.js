"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const challenges_1_1 = require("../../../medium/challenge_1");
const challenges_1_2 = require("../../../medium/challenge_1");
test("Suma de Vectores Minimo. Test 1", () => {
    let entrada = [2, 3, 1, 2, 4, 3];
    let objetivo = 7;
    let salida = 2;
    let resultado = (0, challenges_1_2.suma_vectores_minimo)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("Suma de Vectores Minimo. Test 2", () => {
    let entrada = [1, 4, 4];
    let objetivo = 4;
    let salida = 1;
    let resultado = (0, challenges_1_2.suma_vectores_minimo)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("Suma de Vectores Minimo. Test 3", () => {
    let entrada = [1, 1, 1, 1, 1, 1, 1, 1];
    let objetivo = 11;
    let salida = 0;
    let resultado = (0, challenges_1_2.suma_vectores_minimo)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("Combinatoria triangulo. Test 1", () => {
    let entrada = [2, 2, 3, 4];
    let salida = 3;
    let resultado = (0, challenges_1_1.combinatoria_triangulo)(entrada);
    expect(resultado).toBe(salida);
});
test("Combinatoria triangulo. Test 2", () => {
    let entrada = [4, 2, 3, 4];
    let salida = 4;
    let resultado = (0, challenges_1_1.combinatoria_triangulo)(entrada);
    expect(resultado).toBe(salida);
});
