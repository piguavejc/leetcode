"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const challenges_12_1 = require("../../../easy/challenge_12");
test("obtener el menor numero. Test 1", () => {
  let entrada = [3, 4, 5, 1, 2];
  let salida = 1;
  let resultado = (0, challenges_12_1.obtener_menor_numero)(entrada);
  expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 2", () => {
  let entrada = [4, 5, 6, 7, 0, 1, 2];
  let salida = 0;
  let resultado = (0, challenges_12_1.obtener_menor_numero)(entrada);
  expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 3", () => {
  let entrada = [11, 13, 15, 17];
  let salida = 11;
  let resultado = (0, challenges_12_1.obtener_menor_numero)(entrada);
  expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 4", () => {
  let entrada = [2, 1];
  let salida = 1;
  let resultado = (0, challenges_12_1.obtener_menor_numero)(entrada);
  expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 5", () => {
  let entrada = [3, 1, 2];
  let salida = 1;
  let resultado = (0, challenges_12_1.obtener_menor_numero)(entrada);
  expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 6", () => {
  let entrada = [2, 3, 1];
  let salida = 1;
  let resultado = (0, challenges_12_1.obtener_menor_numero)(entrada);
  expect(resultado).toBe(salida);
});
test("obtener el menor numero. Test 7", () => {
  let entrada = [5, 1, 2, 3, 4];
  let salida = 1;
  let resultado = (0, challenges_12_1.obtener_menor_numero)(entrada);
  expect(resultado).toBe(salida);
});
