import { suma_vectores } from "@busqueda_binaria/easy/challenges_7";
import { vector_especial } from "@busqueda_binaria/easy/challenges_7";
import { datos_3 } from "./datos";

test("Suma. Test 1", () => {
  let numeros: number[] = [2, 7, 11, 15];
  let objetivo: number = 9;
  let salida: number[] = [1, 2];
  let resultado: number[] = suma_vectores(objetivo, numeros);

  expect(resultado).toStrictEqual(salida);
});

test("Suma. Test 2", () => {
  let numeros: number[] = [2, 3, 4];
  let objetivo: number = 6;
  let salida: number[] = [1, 3];
  let resultado: number[] = suma_vectores(objetivo, numeros);

  expect(resultado).toStrictEqual(salida);
});

test("Suma. Test 3", () => {
  let numeros: number[] = [-1, 0];
  let objetivo: number = -1;
  let salida: number[] = [1, 2];
  let resultado: number[] = suma_vectores(objetivo, numeros);

  expect(resultado).toStrictEqual(salida);
});

test("Suma. Test 4", () => {
  let numeros: number[] = [1, 2, 3, 4, 5, 6, 7];
  let objetivo: number = 9;
  let salida: number[] = [2, 7];
  let resultado: number[] = suma_vectores(objetivo, numeros);
  expect(resultado).toStrictEqual(salida);
});

test("Suma. Test 5", () => {
  let numeros: number[] = [3, 3, 3, 4];
  let objetivo: number = 6;
  let salida: number[] = [1, 2];
  let resultado: number[] = suma_vectores(objetivo, numeros);

  expect(resultado).toEqual(expect.arrayContaining(salida));
});

test("Suma. Test 6", () => {
  let numeros: number[] = datos_3;
  let objetivo: number = 542;
  let salida: number[] = [24, 32];
  let resultado: number[] = suma_vectores(objetivo, numeros);
  expect(resultado).toEqual(expect.arrayContaining(salida));
});

test("Suma. Test 8", () => {
  let numeros: number[] = [
    12, 83, 104, 129, 140, 184, 199, 300, 306, 312, 321, 325, 341, 344, 349,
    356, 370, 405, 423, 444, 446, 465, 471, 491, 500, 506, 508, 530, 539, 543,
    569, 591, 606, 607, 612, 614, 623, 627, 645, 662, 670, 685, 689, 726, 731,
    737, 744, 747, 764, 773, 778, 787, 802, 805, 811, 819, 829, 841, 879, 905,
    918, 918, 929, 955, 997,
  ];
  let objetivo: number = 789;
  let salida: number[] = [3, 42];
  let resultado: number[] = suma_vectores(objetivo, numeros);
  expect(resultado).toEqual(expect.arrayContaining(salida));
});

/* Vector especial */
test("vector_especial. Test 1", () => {
  let numeros: number[] = [3, 5];
  let salidad: number = 2;
  let respuesta: number = vector_especial(numeros);

  expect(respuesta).toBe(salidad);
});

test("vector_especial. Test 2", () => {
  let numeros: number[] = [0, 0];
  let salidad: number = -1;
  let respuesta: number = vector_especial(numeros);

  expect(respuesta).toBe(salidad);
});

test("vector_especial. Test 3", () => {
  let numeros: number[] = [0, 4, 3, 0, 4];
  let salidad: number = 3;
  let respuesta: number = vector_especial(numeros);

  expect(respuesta).toBe(salidad);
});

test("vector_especial. Test 4", () => {
  let numeros: number[] = [1, 3, 4, 5];
  let salidad: number = 3;
  let respuesta: number = vector_especial(numeros);

  expect(respuesta).toBe(salidad);
});
