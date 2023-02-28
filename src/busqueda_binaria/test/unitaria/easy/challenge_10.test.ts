import { main } from "../../../Busqueda.Binaria.01/10/Problema.1";
import { suma_numeros_cudrados } from "../../../Busqueda.Binaria.01/10/Problema.2";

//interseccion

test("interseccion. Test 1", () => {
  let numeros_1: number[] = [1, 2, 2, 1];
  let numeros_2: number[] = [2, 2];
  let salidad: number[] = [2, 2];
  let respuesta: number[] = main(numeros_1, numeros_2);
  expect(respuesta).toStrictEqual(expect.arrayContaining(salidad));
});

test("interseccion. Test 2", () => {
  let numeros_1: number[] = [4, 9, 5];
  let numeros_2: number[] = [9, 4, 9, 8, 4];
  let salidad: number[] = [4, 9];
  let respuesta: number[] = main(numeros_1, numeros_2);
  expect(respuesta).toStrictEqual(expect.arrayContaining(salidad));
});

test("interseccion. Test 3", () => {
  let numeros_1: number[] = [1, 2, 2, 1];
  let numeros_2: number[] = [2];
  let salidad: number[] = [2];
  let respuesta: number[] = main(numeros_1, numeros_2);
  expect(respuesta).toStrictEqual(expect.arrayContaining(salidad));
});

//Suma de 2 numeros

test("suma de 2 numeros. Test 1", () => {
  let entrada: number = 5;
  let salida: boolean = true;
  let resultado: boolean = suma_numeros_cudrados(entrada);
  expect(resultado).toBe(salida);
});

test("suma de 2 numeros. Test 2", () => {
  let entrada: number = 2;
  let salida: boolean = true;
  let resultado: boolean = suma_numeros_cudrados(entrada);
  expect(resultado).toBe(salida);
});

test("suma de 2 numeros. Test 3", () => {
  let entrada: number = 1;
  let salida: boolean = true;
  let resultado: boolean = suma_numeros_cudrados(entrada);
  expect(resultado).toBe(salida);
});

test("suma de 2 numeros. Test 4", () => {
  let entrada: number = 9;
  let salida: boolean = true;
  let resultado: boolean = suma_numeros_cudrados(entrada);
  expect(resultado).toBe(salida);
});
