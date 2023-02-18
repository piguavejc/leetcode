"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Problema_1_1 = require("../../../Busqueda.Binaria.01/04/Problema.1");
const Problema_2_1 = require("../../../Busqueda.Binaria.01/04/Problema.2");
test("calculo raiz cuadrada test 1", () => {
    let numero = 8;
    let objetivo = 2;
    let salida = (0, Problema_1_1.calculo_raiz_cuadrada)(numero);
    expect(salida).toBe(objetivo);
});
test("calculo raiz cuadrada test 2", () => {
    let numero = 26;
    let objetivo = 5;
    let salida = (0, Problema_1_1.calculo_raiz_cuadrada)(numero);
    expect(salida).toBe(objetivo);
});
test("calculo raiz cuadrada test 3", () => {
    let numero = 91;
    let objetivo = 9;
    let salida = (0, Problema_1_1.calculo_raiz_cuadrada)(numero);
    expect(salida).toBe(objetivo);
});
test("encontar letra mayor test 1", () => {
    let entrada = ["c", "f", "j"];
    let objetivo = "a";
    let resultado = (0, Problema_2_1.buscar_letra_mayor)(entrada, objetivo);
    let salida = "c";
    expect(resultado).toBe(salida);
});
test("encontar letra mayor test 2", () => {
    let entrada = ["c", "f", "j"];
    let objetivo = "c";
    let resultado = (0, Problema_2_1.buscar_letra_mayor)(entrada, objetivo);
    let salida = "f";
    expect(resultado).toBe(salida);
});
test("encontar letra mayor test 3", () => {
    let entrada = ["c", "f", "j"];
    let objetivo = "d";
    let resultado = (0, Problema_2_1.buscar_letra_mayor)(entrada, objetivo);
    let salida = "f";
    expect(resultado).toBe(salida);
});
test("encontar letra mayor test 4", () => {
    let entrada = ["a", "b"];
    let objetivo = "z";
    let resultado = (0, Problema_2_1.buscar_letra_mayor)(entrada, objetivo);
    let salida = "a";
    expect(resultado).toBe(salida);
});
test("encontar letra mayor test 5", () => {
    let entrada = ["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"];
    let objetivo = "e";
    let resultado = (0, Problema_2_1.buscar_letra_mayor)(entrada, objetivo);
    let salida = "n";
    expect(resultado).toBe(salida);
});
test("encontar letra mayor test 6", () => {
    let entrada = ["e", "e", "e", "k", "q", "q", "q", "v", "v", "y"];
    let objetivo = "e";
    let resultado = (0, Problema_2_1.buscar_letra_mayor)(entrada, objetivo);
    let salida = "k";
    expect(resultado).toBe(salida);
});
test("encontar letra mayor test 7", () => {
    let entrada = ["e", "e", "e", "k", "q", "q", "q", "v", "v", "y"];
    let objetivo = "r";
    let resultado = (0, Problema_2_1.buscar_letra_mayor)(entrada, objetivo);
    let salida = "v";
    expect(resultado).toBe(salida);
});
test("encontar letra mayor test 8", () => {
    let entrada = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    let objetivo = "b";
    let resultado = (0, Problema_2_1.buscar_letra_mayor)(entrada, objetivo);
    let salida = "c";
    expect(resultado).toBe(salida);
});
