import {combinatoria_triangulo} from "@busqueda_binaria/medium/challenges_1";
import {suma_vectores_minimo} from "@busqueda_binaria/medium/challenges_1";
test("Suma de Vectores Minimo. Test 1", () => {
  let entrada: number[] = [2, 3, 1, 2, 4, 3];
  let objetivo: number = 7;
  let salida: number = 2;

  let resultado = suma_vectores_minimo(entrada, objetivo);
  expect(resultado).toBe(salida);
});

test("Suma de Vectores Minimo. Test 2", () => {
  let entrada: number[] = [1, 4, 4];
  let objetivo: number = 4;
  let salida: number = 1;

  let resultado = suma_vectores_minimo(entrada, objetivo);
  expect(resultado).toBe(salida);
});

test("Suma de Vectores Minimo. Test 3", () => {
  let entrada: number[] = [1, 1, 1, 1, 1, 1, 1, 1];
  let objetivo: number = 11;
  let salida: number = 0;

  let resultado = suma_vectores_minimo(entrada, objetivo);
  expect(resultado).toBe(salida);
});

test("Combinatoria triangulo. Test 1", () => {
  let entrada: number[] = [2, 2, 3, 4];
  let salida: number = 3;
  let resultado: number = combinatoria_triangulo(entrada);

  expect(resultado).toBe(salida);
});

test("Combinatoria triangulo. Test 2", () => {
  let entrada: number[] = [4, 2, 3, 4];
  let salida: number = 4;
  let resultado: number = combinatoria_triangulo(entrada);

  expect(resultado).toBe(salida);
});
