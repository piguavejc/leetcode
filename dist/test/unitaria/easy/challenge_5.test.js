"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const challenges_5_1 = require("../../../easy/challenge_5");
test("encontrar el inidice inicial y final del objetivo. Test 1", () => {
    let enteros = [5, 7, 7, 8, 8, 10];
    let objetivo = 8;
    let resultado = (0, challenges_5_1.encontrar_posicion_final_e_inicial)(enteros, objetivo);
    let salida = [3, 4];
    expect(resultado).toEqual(expect.arrayContaining(salida));
});
test("encontrar el inidice inicial y final del objetivo. Test 2", () => {
    let enteros = [5, 7, 7, 8, 8, 10];
    let objetivo = 6;
    let resultado = (0, challenges_5_1.encontrar_posicion_final_e_inicial)(enteros, objetivo);
    let salida = [-1, -1];
    expect(resultado).toEqual(expect.arrayContaining(salida));
});
test("encontrar el inidice inicial y final del objetivo. Test 3", () => {
    let enteros = [];
    let objetivo = 0;
    let resultado = (0, challenges_5_1.encontrar_posicion_final_e_inicial)(enteros, objetivo);
    let salida = [-1, -1];
    expect(resultado).toEqual(expect.arrayContaining(salida));
});
test("encontrar el inidice inicial y final del objetivo. Test 4", () => {
    let enteros = [2, 2];
    let objetivo = 2;
    let resultado = (0, challenges_5_1.encontrar_posicion_final_e_inicial)(enteros, objetivo);
    let salida = [0, 1];
    expect(resultado).toEqual(expect.arrayContaining(salida));
});
test("encontrar el inidice inicial y final del objetivo. Test 5", () => {
    let enteros = [1, 2, 2];
    let objetivo = 2;
    let resultado = (0, challenges_5_1.encontrar_posicion_final_e_inicial)(enteros, objetivo);
    let salida = [1, 2];
    expect(resultado).toEqual(expect.arrayContaining(salida));
});
test("encontrar el inidice inicial y final del objetivo. Test 6", () => {
    let enteros = [2, 2, 2];
    let objetivo = 2;
    let resultado = (0, challenges_5_1.encontrar_posicion_final_e_inicial)(enteros, objetivo);
    let salida = [0, 2];
    expect(resultado).toEqual(expect.arrayContaining(salida));
});
test("encontrar el inidice inicial y final del objetivo. Test 7", () => {
    let enteros = [1, 2, 3, 3, 3, 3, 4, 5, 9];
    let objetivo = 3;
    let resultado = (0, challenges_5_1.encontrar_posicion_final_e_inicial)(enteros, objetivo);
    let salida = [2, 5];
    expect(resultado).toEqual(expect.arrayContaining(salida));
});
3;
