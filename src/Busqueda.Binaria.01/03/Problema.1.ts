function es_cuadrado_perfecto(numero: number): boolean {
    let minimo: number = 1;
    let maximo: number = numero;

    let todo_mal_numeros: boolean = restriccion(1, Math.pow(2, 31) - 1, numero); // [1 ; (2^31 - 1)] interbalo cerrado

    if (todo_mal_numeros) return null;

    while (minimo <= maximo) {
        let mitad: number = Math.trunc((minimo + maximo) / 2);
        let actual: number = mitad;
        let resultado: number = actual * actual;

        if (resultado === numero) return true;

        if (resultado > numero) maximo = mitad - 1;
        else minimo = mitad + 1;
    }
    return false;
}

function restriccion(minimo: number, maximo: number, numero: number): boolean {
    if (!(numero >= minimo && numero <= maximo)) return true;

    return false;
}
export { es_cuadrado_perfecto };
