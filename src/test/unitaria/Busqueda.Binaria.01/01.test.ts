import { buscar_objetivo } from "../../../Busqueda.Binaria.01/01/problema.1";
import { juego_adivinanza } from "../../../Busqueda.Binaria.01/01/problema.2";
test("adivinar numero 1", () => {
    let entrada: number[] = [-1, 0, 3, 5, 9, 12];
    let salida = -1;
    let objetivo: number = 2;
    let resultado: number = buscar_objetivo(entrada, objetivo);
    expect(resultado).toBe(salida);
});

test("adivinar numero 2", () => {
    let entrada: number[] = [-1, 0, 3, 5, 9, 12];
    let salida: number = 4;
    let objetivo: number = 9;
    let resultado: number = buscar_objetivo(entrada, objetivo);
    expect(resultado).toBe(salida);
});

test("adivinar numero 3", () => {
    let entrada: number[] = [-1, 0, 3, 5, 9, 10000];
    let salida: number = 5;
    let objetivo: number = 10000;
    let resultado: number = buscar_objetivo(entrada, objetivo);
    expect(resultado).toBe(salida);
});

test("adivinar numero 4", () => {
    let entrada: number[] = [-10000, 0, 3, 5, 9, 10000];
    let salida: number = -1;
    let objetivo: number = -10000;
    let resultado: number = buscar_objetivo(entrada, objetivo);
    expect(resultado).toBe(salida);
});

test("adivinar numero 5", () => {
    let entrada: number[] = [5];
    let salida: number = 0;
    let objetivo: number = 5;
    let resultado: number = buscar_objetivo(entrada, objetivo);
    expect(resultado).toBe(salida);
});

test("adivinar numero 6", () => {
    let entrada: number[] = [1, 2, 3, 4];
    let salida: number = 0;
    let objetivo: number = 1;
    let resultado: number = buscar_objetivo(entrada, objetivo);
    expect(resultado).toBe(salida);
});

test("adivinar numero 7", () => {
    let entrada: number[] = [1, 2, 3, 4];
    let salida: number = 3;
    let objetivo: number = 4;
    let resultado: number = buscar_objetivo(entrada, objetivo);
    expect(resultado).toBe(salida);
});

/* Test de Juego de adivinanza */

test("juego de adivinanza. test 1", () => {
    let numero: number = 10;
    let objetivo: number = 6;
    let resultado: number = juego_adivinanza(numero, objetivo);
    expect(resultado).toBe(objetivo);
});

test("juego de adivinanza. test 2", () => {
    let numero: number = 2;
    let objetivo: number = 1;
    let resultado: number = juego_adivinanza(numero, objetivo);
    expect(resultado).toBe(objetivo);
});

test("juego de adivinanza. test 3", () => {
    let numero: number = 10;
    let objetivo: number = 10;
    let resultado: number = juego_adivinanza(numero, objetivo);
    expect(resultado).toBe(objetivo);
});

test("juego de adivinanza. test 4", () => {
    let numero: number = 10;
    let objetivo: number = 1;
    let resultado: number = juego_adivinanza(numero, objetivo);
    expect(resultado).toBe(objetivo);
});

test("juego de adivinanza. test 5", () => {
    let numero: number = Math.pow(2, 31) + 1;
    let objetivo: number = 6;
    let salida: number = -1;
    let resultado: number = juego_adivinanza(numero, objetivo);
    expect(resultado).toBe(salida);
});

test("juego de adivinanza. test 6", () => {
    let numero: number = Math.pow(2, 31);
    let objetivo: number = numero + 1;
    let salida: number = -1;
    let resultado: number = juego_adivinanza(numero, objetivo);
    expect(resultado).toBe(salida);
});

test("juego de adivinanza. test 7", () => {
    let numero: number = Math.pow(2, 31);
    let objetivo: number = numero;
    let salida: number = -1;
    let resultado: number = juego_adivinanza(numero, objetivo);
    expect(resultado).toBe(salida);
});
