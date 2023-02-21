import { calculo_raiz_cuadrada } from "../../../Busqueda.Binaria.01/04/Problema.1";
import { buscar_letra_mayor } from "../../../Busqueda.Binaria.01/04/Problema.2";
test("calculo raiz cuadrada test 1", () => {
  let numero: number = 8;
  let objetivo: number = 2;

  let salida: number = calculo_raiz_cuadrada(numero);

  expect(salida).toBe(objetivo);
});

test("calculo raiz cuadrada test 2", () => {
  let numero: number = 26;
  let objetivo: number = 5;

  let salida: number = calculo_raiz_cuadrada(numero);

  expect(salida).toBe(objetivo);
});

test("calculo raiz cuadrada test 3", () => {
  let numero: number = 91;
  let objetivo: number = 9;

  let salida: number = calculo_raiz_cuadrada(numero);

  expect(salida).toBe(objetivo);
});

test("encontar letra mayor test 1", () => {
  let entrada: string[] = ["c", "f", "j"];
  let objetivo: string = "a";
  let resultado: string = buscar_letra_mayor(entrada, objetivo);
  let salida: string = "c";
  expect(resultado).toBe(salida);
});
test("encontar letra mayor test 2", () => {
  let entrada: string[] = ["c", "f", "j"];
  let objetivo = "c";
  let resultado: string = buscar_letra_mayor(entrada, objetivo);
  let salida = "f";
  expect(resultado).toBe(salida);
});

test("encontar letra mayor test 3", () => {
  let entrada: string[] = ["c", "f", "j"];
  let objetivo = "d";
  let resultado: string = buscar_letra_mayor(entrada, objetivo);
  let salida = "f";
  expect(resultado).toBe(salida);
});

test("encontar letra mayor test 4", () => {
  let entrada: string[] = ["a", "b"];
  let objetivo = "z";
  let resultado: string = buscar_letra_mayor(entrada, objetivo);
  let salida = "a";
  expect(resultado).toBe(salida);
});

test("encontar letra mayor test 5", () => {
  let entrada: string[] = ["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"];
  let objetivo = "e";
  let resultado: string = buscar_letra_mayor(entrada, objetivo);
  let salida = "n";
  expect(resultado).toBe(salida);
});

test("encontar letra mayor test 6", () => {
  let entrada: string[] = ["e", "e", "e", "k", "q", "q", "q", "v", "v", "y"];
  let objetivo = "e";
  let resultado: string = buscar_letra_mayor(entrada, objetivo);
  let salida = "k";
  expect(resultado).toBe(salida);
});

test("encontar letra mayor test 7", () => {
  let entrada: string[] = ["e", "e", "e", "k", "q", "q", "q", "v", "v", "y"];
  let objetivo = "r";
  let resultado: string = buscar_letra_mayor(entrada, objetivo);
  let salida = "v";
  expect(resultado).toBe(salida);
});

test("encontar letra mayor test 8", () => {
  let entrada: string[] = [
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
  let resultado: string = buscar_letra_mayor(entrada, objetivo);
  let salida = "c";
  expect(resultado).toBe(salida);
});
