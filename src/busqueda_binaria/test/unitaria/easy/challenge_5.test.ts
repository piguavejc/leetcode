import { encontrar_posicion_final_e_inicial } from "../../../Busqueda.Binaria.01/05/Problema.2";
test("encontrar el inidice inicial y final del objetivo. Test 1", () => {
  let enteros: number[] = [5, 7, 7, 8, 8, 10];
  let objetivo: number = 8;
  let resultado: number[] = encontrar_posicion_final_e_inicial(
    enteros,
    objetivo
  );
  let salida: number[] = [3, 4];
  expect(resultado).toEqual(expect.arrayContaining(salida));
});

test("encontrar el inidice inicial y final del objetivo. Test 2", () => {
  let enteros: number[] = [5, 7, 7, 8, 8, 10];
  let objetivo: number = 6;
  let resultado: number[] = encontrar_posicion_final_e_inicial(
    enteros,
    objetivo
  );
  let salida: number[] = [-1, -1];
  expect(resultado).toEqual(expect.arrayContaining(salida));
});

test("encontrar el inidice inicial y final del objetivo. Test 3", () => {
  let enteros: number[] = [];
  let objetivo: number = 0;
  let resultado: number[] = encontrar_posicion_final_e_inicial(
    enteros,
    objetivo
  );
  let salida: number[] = [-1, -1];
  expect(resultado).toEqual(expect.arrayContaining(salida));
});

test("encontrar el inidice inicial y final del objetivo. Test 4", () => {
  let enteros: number[] = [2, 2];
  let objetivo: number = 2;
  let resultado: number[] = encontrar_posicion_final_e_inicial(
    enteros,
    objetivo
  );
  let salida: number[] = [0, 1];
  expect(resultado).toEqual(expect.arrayContaining(salida));
});

test("encontrar el inidice inicial y final del objetivo. Test 5", () => {
  let enteros: number[] = [1, 2, 2];
  let objetivo: number = 2;
  let resultado: number[] = encontrar_posicion_final_e_inicial(
    enteros,
    objetivo
  );
  let salida: number[] = [1, 2];
  expect(resultado).toEqual(expect.arrayContaining(salida));
});

test("encontrar el inidice inicial y final del objetivo. Test 6", () => {
  let enteros: number[] = [2, 2, 2];
  let objetivo: number = 2;
  let resultado: number[] = encontrar_posicion_final_e_inicial(
    enteros,
    objetivo
  );
  let salida: number[] = [0, 2];
  expect(resultado).toEqual(expect.arrayContaining(salida));
});

test("encontrar el inidice inicial y final del objetivo. Test 7", () => {
  let enteros: number[] = [1, 2, 3, 3, 3, 3, 4, 5, 9];
  let objetivo: number = 3;
  let resultado: number[] = encontrar_posicion_final_e_inicial(
    enteros,
    objetivo
  );
  let salida: number[] = [2, 5];
  expect(resultado).toEqual(expect.arrayContaining(salida));
});

3;
