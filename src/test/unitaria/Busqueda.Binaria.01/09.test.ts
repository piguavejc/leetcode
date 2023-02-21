import { k_filas_mas_debil_matriz } from "../../../Busqueda.Binaria.01/09/Problema.1";
import { encontrar_doble } from "../../../Busqueda.Binaria.01/09/Problema.2";

test("k filas mas debil matriz. test 1", () => {
  let entrada: number[][] = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ];
  let objetivo: number = 3;
  let salida: number[] = [2, 0, 3];

  let respuesta: number[] = k_filas_mas_debil_matriz(entrada, objetivo);
  expect(respuesta).toStrictEqual(expect.arrayContaining(salida));
});

test("k filas mas debil matriz. test 2", () => {
  let entrada: number[][] = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ];
  let objetivo: number = 2;
  let salida: number[] = [0, 2];

  let respuesta: number[] = k_filas_mas_debil_matriz(entrada, objetivo);
  expect(respuesta).toStrictEqual(expect.arrayContaining(salida));
});

test("k filas mas debil matriz. test 3", () => {
  let entrada: number[][] = [
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ];
  let objetivo: number = 1;
  let salida: number[] = [0];

  let respuesta: number[] = k_filas_mas_debil_matriz(entrada, objetivo);
  expect(respuesta).toStrictEqual(expect.arrayContaining(salida));
});

test("k filas mas debil matriz. test 4", () => {
  let entrada: number[][] = [
    [1, 0],
    [1, 0],
    [1, 0],
    [1, 1],
  ];
  let objetivo: number = 4;
  let salida: number[] = [0];

  let respuesta: number[] = k_filas_mas_debil_matriz(entrada, objetivo);
  expect(respuesta).toStrictEqual(expect.arrayContaining(salida));
});

test("k filas mas debil matriz. test 5", () => {
  let entrada: number[][] = [
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
  ];
  let objetivo: number = 4;
  let salida: number[] = [2, 0, 3, 1];

  let respuesta: number[] = k_filas_mas_debil_matriz(entrada, objetivo);
  expect(respuesta).toStrictEqual(expect.arrayContaining(salida));
});
/* encontrar doble */

test("encontrar doble. test 1", () => {
  let entrada: number[] = [7, 1, 14, 11];
  let salida: boolean = true;

  let respuesta: boolean = encontrar_doble(entrada);
  expect(respuesta).toBe(salida);
});

test("encontrar doble. test 2", () => {
  let entrada: number[] = [3, 1, 7, 11];
  let salida: boolean = false;

  let respuesta: boolean = encontrar_doble(entrada);
  expect(respuesta).toBe(salida);
});

test("encontrar doble. test 3", () => {
  let entrada: number[] = [10, 2, 5, 3];
  let salida: boolean = true;

  let respuesta: boolean = encontrar_doble(entrada);
  expect(respuesta).toBe(salida);
});

test("encontrar doble. test 4", () => {
  let entrada: number[] = [-2, 0, 10, -19, 4, 6, -8];
  let salida: boolean = false;

  let respuesta: boolean = encontrar_doble(entrada);
  expect(respuesta).toBe(salida);
});
