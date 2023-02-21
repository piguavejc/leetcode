import { construccion_escaleras } from "../../../Busqueda.Binaria.01/06/Problema.1";
import { encontrar_enesimo_numero } from "../../../Busqueda.Binaria.01/06/Problema.2";
test("contruccion de escalera. test 1", () => {
  let entrada: number = 6;
  let salida: number = 3;

  let resultado: number = construccion_escaleras(entrada);

  expect(resultado).toBe(salida);
});

test("contruccion de escalera. test 2", () => {
  let entrada: number = 21;
  let salida: number = 6;

  let resultado: number = construccion_escaleras(entrada);

  expect(resultado).toBe(salida);
});

test("contruccion de escalera. test 3", () => {
  let entrada: number = 15;
  let salida: number = 5;

  let resultado: number = construccion_escaleras(entrada);

  expect(resultado).toBe(salida);
});

test("encontrar_enesimo_numero test 1", () => {
  let entrada: number[] = [6, 7, 8, 9];
  let objetivo: number = 5;
  let resultado: number = encontrar_enesimo_numero(entrada, objetivo);
  let salida: number = 5;
  expect(resultado).toBe(salida);
});

test("encontrar_enesimo_numero test 2", () => {
  let entrada: number[] = [15, 16, 19, 20];
  let objetivo: number = 1;
  let resultado: number = encontrar_enesimo_numero(entrada, objetivo);
  let salida: number = 1;
  expect(resultado).toBe(salida);
});

test("encontrar_enesimo_numero test 3", () => {
  let entrada: number[] = [1, 2, 3, 4];
  let objetivo: number = 2;
  let resultado: number = encontrar_enesimo_numero(entrada, objetivo);
  let salida: number = 6;
  expect(resultado).toBe(salida);
});

test("encontrar_enesimo_numero test 4", () => {
  let entrada: number[] = [2, 3, 5, 9, 10, 11, 12];
  let objetivo: number = 4;
  let resultado: number = encontrar_enesimo_numero(entrada, objetivo);
  let salida: number = 7;
  expect(resultado).toBe(salida);
});
test("encontrar_enesimo_numero test 5", () => {
  let entrada: number[] = [2, 3, 5, 9, 10, 11, 12];
  let objetivo: number = 3;
  let resultado: number = encontrar_enesimo_numero(entrada, objetivo);
  let salida: number = 6;
  expect(resultado).toBe(salida);
});

test("encontrar_enesimo_numero test 6", () => {
  let entrada: number[] = [2, 3, 5, 9, 10, 11, 12];
  let objetivo: number = 2;
  let resultado: number = encontrar_enesimo_numero(entrada, objetivo);
  let salida: number = 4;
  expect(resultado).toBe(salida);
});

test("encontrar_enesimo_numero test 7", () => {
  let entrada: number[] = [2, 3, 5, 9, 10];
  let objetivo: number = 4;
  let resultado: number = encontrar_enesimo_numero(entrada, objetivo);
  let salida: number = 7;
  expect(resultado).toBe(salida);
});
