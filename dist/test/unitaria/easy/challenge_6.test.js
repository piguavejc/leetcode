"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const challenges_6_1 = require("../../../easy/challenge_6");
const challenges_6_2 = require("../../../easy/challenge_6");
test("contruccion de escalera. test 1", () => {
    let entrada = 6;
    let salida = 3;
    let resultado = (0, challenges_6_1.construccion_escaleras)(entrada);
    expect(resultado).toBe(salida);
});
test("contruccion de escalera. test 2", () => {
    let entrada = 21;
    let salida = 6;
    let resultado = (0, challenges_6_1.construccion_escaleras)(entrada);
    expect(resultado).toBe(salida);
});
test("contruccion de escalera. test 3", () => {
    let entrada = 15;
    let salida = 5;
    let resultado = (0, challenges_6_1.construccion_escaleras)(entrada);
    expect(resultado).toBe(salida);
});
test("encontrar_enesimo_numero test 1", () => {
    let entrada = [6, 7, 8, 9];
    let objetivo = 5;
    let resultado = (0, challenges_6_2.encontrar_enesimo_numero)(entrada, objetivo);
    let salida = 5;
    expect(resultado).toBe(salida);
});
test("encontrar_enesimo_numero test 2", () => {
    let entrada = [15, 16, 19, 20];
    let objetivo = 1;
    let resultado = (0, challenges_6_2.encontrar_enesimo_numero)(entrada, objetivo);
    let salida = 1;
    expect(resultado).toBe(salida);
});
test("encontrar_enesimo_numero test 3", () => {
    let entrada = [1, 2, 3, 4];
    let objetivo = 2;
    let resultado = (0, challenges_6_2.encontrar_enesimo_numero)(entrada, objetivo);
    let salida = 6;
    expect(resultado).toBe(salida);
});
test("encontrar_enesimo_numero test 4", () => {
    let entrada = [2, 3, 5, 9, 10, 11, 12];
    let objetivo = 4;
    let resultado = (0, challenges_6_2.encontrar_enesimo_numero)(entrada, objetivo);
    let salida = 7;
    expect(resultado).toBe(salida);
});
test("encontrar_enesimo_numero test 5", () => {
    let entrada = [2, 3, 5, 9, 10, 11, 12];
    let objetivo = 3;
    let resultado = (0, challenges_6_2.encontrar_enesimo_numero)(entrada, objetivo);
    let salida = 6;
    expect(resultado).toBe(salida);
});
test("encontrar_enesimo_numero test 6", () => {
    let entrada = [2, 3, 5, 9, 10, 11, 12];
    let objetivo = 2;
    let resultado = (0, challenges_6_2.encontrar_enesimo_numero)(entrada, objetivo);
    let salida = 4;
    expect(resultado).toBe(salida);
});
test("encontrar_enesimo_numero test 7", () => {
    let entrada = [2, 3, 5, 9, 10];
    let objetivo = 4;
    let resultado = (0, challenges_6_2.encontrar_enesimo_numero)(entrada, objetivo);
    let salida = 7;
    expect(resultado).toBe(salida);
});
