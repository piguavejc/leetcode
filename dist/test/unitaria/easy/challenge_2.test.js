"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const challenges_2_1 = require("../../../easy/challenge_2");
const challenges_2_2 = require("../../../easy/challenge_2");
/* Test de encontrar el objetivo */
test(`encontrar_objetivo test 1`, () => {
  let numeros = [1, 3, 5, 6];
  let Objetivo = 5;
  let salida = 2;
  let resultado = (0, challenges_2_1.encontrar_objetivo)(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
test(`encontrar_objetivo test 2`, () => {
  let numeros = [1, 3, 5, 6];
  let Objetivo = 2;
  let salida = 1;
  let resultado = (0, challenges_2_1.encontrar_objetivo)(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
test(`encontrar_objetivo test 3`, () => {
  let numeros = [1, 3, 5, 6];
  let Objetivo = 7;
  let salida = 4;
  let resultado = (0, challenges_2_1.encontrar_objetivo)(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
test(`encontrar_objetivo test 4`, () => {
  let numeros = [1];
  let Objetivo = 1;
  let salida = 0;
  let resultado = (0, challenges_2_1.encontrar_objetivo)(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
test(`encontrar_objetivo test 5`, () => {
  let numeros = [1];
  let Objetivo = 0;
  let salida = 0;
  let resultado = (0, challenges_2_1.encontrar_objetivo)(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
test(`encontrar_objetivo test 6`, () => {
  let numeros = [1];
  let Objetivo = 2;
  let salida = 1;
  let resultado = (0, challenges_2_1.encontrar_objetivo)(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
test(`encontrar_objetivo test 7`, () => {
  let numeros = [1, 3, 5, 7];
  let Objetivo = 0;
  let salida = 0;
  let resultado = (0, challenges_2_1.encontrar_objetivo)(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
test(`encontrar_objetivo test 8`, () => {
  let numeros = [-Math.pow(10, 4), 1, 3, 5, 7, Math.pow(10, 4)];
  let Objetivo = Math.pow(10, 4);
  let salida = 5;
  let resultado = (0, challenges_2_1.encontrar_objetivo)(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
test(`encontrar_objetivo test 9`, () => {
  let numeros = [-Math.pow(10, 4), 1, 3, 5, 7, Math.pow(10, 4)];
  let Objetivo = Math.pow(10, 4) + 1;
  let salida = -1;
  let resultado = (0, challenges_2_1.encontrar_objetivo)(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
test(`encontrar_objetivo test 10`, () => {
  let numeros = [-(Math.pow(10, 4) + 1), 1, 3, 5, 7, Math.pow(10, 4) + 1];
  let Objetivo = Math.pow(10, 4) + 1;
  let salida = -1;
  let resultado = (0, challenges_2_1.encontrar_objetivo)(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
/* test de indice de pico de un array */
test(`indice_de_pico_array_montana test 1`, () => {
  let numeros = [0, 1, 0];
  let salida = 1;
  let resultado = (0, challenges_2_2.indice_de_pico_array_montana)(numeros);
  expect(resultado).toBe(salida);
});
test(`indice_de_pico_array_montana test 2`, () => {
  let numeros = [0, 2, 1, 0];
  let salida = 1;
  let resultado = (0, challenges_2_2.indice_de_pico_array_montana)(numeros);
  expect(resultado).toBe(salida);
});
test(`indice_de_pico_array_montana test 3`, () => {
  let numeros = [0, 10, 5, 2];
  let salida = 1;
  let resultado = (0, challenges_2_2.indice_de_pico_array_montana)(numeros);
  expect(resultado).toBe(salida);
});
test(`indice_de_pico_array_montana test 4`, () => {
  let numeros = [3, 5, 3, 2, 0];
  let salida = 1;
  let resultado = (0, challenges_2_2.indice_de_pico_array_montana)(numeros);
  expect(resultado).toBe(salida);
});
