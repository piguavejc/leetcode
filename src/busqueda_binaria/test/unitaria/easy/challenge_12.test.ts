import { obtener_menor_numero } from "@busqueda_binaria/easy/challenges_12";

test("obtener el menor numero. Test 1", () => {
  let entrada: number[] = [3, 4, 5, 1, 2];
  let salida: number = 1;
  let resultado: number = obtener_menor_numero(entrada);
  expect(resultado).toBe(salida);
});

test("obtener el menor numero. Test 2", () => {
  let entrada: number[] = [4, 5, 6, 7, 0, 1, 2];
  let salida: number = 0;
  let resultado: number = obtener_menor_numero(entrada);
  expect(resultado).toBe(salida);
});

test("obtener el menor numero. Test 3", () => {
  let entrada: number[] = [11, 13, 15, 17];
  let salida: number = 11;
  let resultado: number = obtener_menor_numero(entrada);
  expect(resultado).toBe(salida);
});

test("obtener el menor numero. Test 4", () => {
  let entrada: number[] = [2, 1];
  let salida: number = 1;
  let resultado: number = obtener_menor_numero(entrada);
  expect(resultado).toBe(salida);
});

test("obtener el menor numero. Test 5", () => {
  let entrada: number[] = [3, 1, 2];
  let salida: number = 1;
  let resultado: number = obtener_menor_numero(entrada);
  expect(resultado).toBe(salida);
});

test("obtener el menor numero. Test 6", () => {
  let entrada: number[] = [2, 3, 1];
  let salida: number = 1;
  let resultado: number = obtener_menor_numero(entrada);
  expect(resultado).toBe(salida);
});

test("obtener el menor numero. Test 7", () => {
  let entrada: number[] = [5, 1, 2, 3, 4];
  let salida: number = 1;
  let resultado: number = obtener_menor_numero(entrada);
  expect(resultado).toBe(salida);
});
