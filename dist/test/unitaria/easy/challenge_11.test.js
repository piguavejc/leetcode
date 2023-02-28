"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const challenges_11_1 = require("../../../easy/challenge_11");
const challenges_11_2 = require("../../../easy/challenge_11");
test("pares valaidos. Test 1", () => {
    let numeros_1 = [55, 30, 5, 4, 2];
    let numeros_2 = [100, 20, 10, 10, 5];
    let salida = 2;
    let resultado = (0, challenges_11_2.pares_validos)(numeros_1, numeros_2);
    expect(salida).toBe(resultado);
});
test("pares valaidos. Test 2", () => {
    let numeros_1 = [2, 2, 2];
    let numeros_2 = [10, 10, 1];
    let salida = 1;
    let resultado = (0, challenges_11_2.pares_validos)(numeros_1, numeros_2);
    expect(salida).toBe(resultado);
});
/* obtener el menor numero */
test("obtener el menor numero. Test 1", () => {
    let entrada = [3, 4, 5, 1, 2];
    let salida = 1;
    let objetivo = 4;
    let resultado = (0, challenges_11_1.obtener_menor_numero)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 2", () => {
    let entrada = [4, 5, 6, 7, 0, 1, 2];
    let salida = 0;
    let objetivo = 4;
    let resultado = (0, challenges_11_1.obtener_menor_numero)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 3", () => {
    let entrada = [11, 13, 15, 17];
    let salida = 2;
    let objetivo = 15;
    let resultado = (0, challenges_11_1.obtener_menor_numero)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 4", () => {
    let entrada = [2, 1];
    let salida = 1;
    let objetivo = 1;
    let resultado = (0, challenges_11_1.obtener_menor_numero)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 5", () => {
    let entrada = [3, 1, 2];
    let salida = -1;
    let objetivo = 0;
    let resultado = (0, challenges_11_1.obtener_menor_numero)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 6", () => {
    let entrada = [9, 1, 2, 3, 4, 5, 6, 7, 8];
    let salida = 1;
    let objetivo = 1;
    let resultado = (0, challenges_11_1.obtener_menor_numero)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 7", () => {
    let entrada = [4, 5, 6, 7, 0, 1, 2];
    let salida = 2;
    let objetivo = 6;
    let resultado = (0, challenges_11_1.obtener_menor_numero)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 8", () => {
    let entrada = [8, 1, 2, 3, 4, 5, 6, 7];
    let salida = 6;
    let objetivo = 6;
    let resultado = (0, challenges_11_1.obtener_menor_numero)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 9", () => {
    let entrada = [4, 5, 6, 7, 0, 1, 2];
    let salida = 4;
    let objetivo = 0;
    let resultado = (0, challenges_11_1.obtener_menor_numero)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 10", () => {
    let entrada = [
        278, 280, 281, 286, 287, 290, 2, 3, 4, 8, 9, 14, 15, 16, 21, 24, 25, 31, 32,
        34, 36, 37, 42, 45, 51, 52, 54, 55, 60, 63, 66, 68, 69, 71, 76, 81, 83, 84,
        85, 86, 87, 94, 97, 99, 106, 107, 110, 113, 114, 115, 118, 120, 121, 125,
        134, 136, 137, 138, 142, 143, 147, 150, 152, 159, 160, 161, 165, 166, 174,
        176, 178, 186, 187, 189, 190, 191, 195, 196, 198, 204, 212, 216, 217, 220,
        221, 222, 225, 227, 229, 232, 237, 239, 242, 245, 251, 263, 264, 274, 275,
        276, 277,
    ];
    let salida = 3;
    let objetivo = 286;
    let resultado = (0, challenges_11_1.obtener_menor_numero)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 11", () => {
    let entrada = [4, 5, 6, 7, 8, 1, 2, 3];
    let salida = 4;
    let objetivo = 8;
    let resultado = (0, challenges_11_1.obtener_menor_numero)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
