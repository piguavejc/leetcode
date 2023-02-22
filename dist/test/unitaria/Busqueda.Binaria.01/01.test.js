"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const problema_1_1 = require("../../../Busqueda.Binaria.01/01/problema.1");
const problema_2_1 = require("../../../Busqueda.Binaria.01/01/problema.2");
test("adivinar numero 1", () => {
    let entrada = [-1, 0, 3, 5, 9, 12];
    let salida = -1;
    let objetivo = 2;
    let resultado = (0, problema_1_1.buscar_objetivo)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("adivinar numero 2", () => {
    let entrada = [-1, 0, 3, 5, 9, 12];
    let salida = 4;
    let objetivo = 9;
    let resultado = (0, problema_1_1.buscar_objetivo)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("adivinar numero 3", () => {
    let entrada = [-1, 0, 3, 5, 9, 10000];
    let salida = -1;
    let objetivo = 10000;
    let resultado = (0, problema_1_1.buscar_objetivo)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("adivinar numero 4", () => {
    let entrada = [-10000, 0, 3, 5, 9, 10000];
    let salida = -1;
    let objetivo = -10000;
    let resultado = (0, problema_1_1.buscar_objetivo)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("adivinar numero 5", () => {
    let entrada = [5];
    let salida = 0;
    let objetivo = 5;
    let resultado = (0, problema_1_1.buscar_objetivo)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("adivinar numero 6", () => {
    let entrada = [1, 2, 3, 4];
    let salida = 0;
    let objetivo = 1;
    let resultado = (0, problema_1_1.buscar_objetivo)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
test("adivinar numero 7", () => {
    let entrada = [1, 2, 3, 4];
    let salida = 3;
    let objetivo = 4;
    let resultado = (0, problema_1_1.buscar_objetivo)(entrada, objetivo);
    expect(resultado).toBe(salida);
});
// Test de Juego de adivinanza 
test("juego de adivinanza. test 1", () => {
    let numero = 10;
    let objetivo = 6;
    let resultado = (0, problema_2_1.juego_adivinanza)(numero, objetivo);
    expect(resultado).toBe(objetivo);
});
test("juego de adivinanza. test 2", () => {
    let numero = 2;
    let objetivo = 1;
    let resultado = (0, problema_2_1.juego_adivinanza)(numero, objetivo);
    expect(resultado).toBe(objetivo);
});
test("juego de adivinanza. test 3", () => {
    let numero = 10;
    let objetivo = 10;
    let resultado = (0, problema_2_1.juego_adivinanza)(numero, objetivo);
    expect(resultado).toBe(objetivo);
});
test("juego de adivinanza. test 4", () => {
    let numero = 10;
    let objetivo = 1;
    let resultado = (0, problema_2_1.juego_adivinanza)(numero, objetivo);
    expect(resultado).toBe(objetivo);
});
