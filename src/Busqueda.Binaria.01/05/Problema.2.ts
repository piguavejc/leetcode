function encontrar_posicion_final_e_inicial(enteros: number[], objetivo: number): number[] {
    let minimo: number = 0;
    let maximo: number = enteros.length - 1;
    let longitud: number = enteros.length;

    let inicial: number = enteros[minimo];
    let ultimo: number = enteros[maximo];

    let todo_mal_n: boolean = restriccion(longitud, 0, Math.pow(10, 5)); // [0 ; 10^5] intervalo cerrado
    let todo_mal_objetivo: boolean = restriccion(objetivo, -Math.pow(10, 5), Math.pow(10, 5)); // [-10^5 ; 10^5] intervalo cerrado

    if (todo_mal_n || todo_mal_objetivo) return [-1, -1];

    // [] ---- 1
    if (maximo < 0) return [-1, -1];

    //[2] --- 1
    if (objetivo !== inicial && maximo === 0) return [-1, -1];

    // [2,2,2] --- 2
    if (inicial === objetivo && ultimo === objetivo) return [minimo, maximo];

    let menor: number = encontar_menor_indice(enteros, objetivo);
    let mayor: number = encontar_mayor_indice(enteros, objetivo);

    return [menor, mayor];
}

function encontar_menor_indice(numeros: number[], objetivo: number) {
    let minimo: number = 0;
    let maximo: number = numeros.length - 1;
    let indice_menor: number = -1;

    while (minimo <= maximo) {
        let mitad: number = Math.trunc((minimo + maximo) / 2);
        let actual: number = numeros[mitad];
        let todo_mal_actual: boolean = restriccion(actual, -Math.pow(10, 5), Math.pow(10, 5)); // [-10^9 ; 10^9] intervalo cerrado

        if (todo_mal_actual) return -1;

        if (actual === objetivo) indice_menor = mitad;

        if (objetivo <= actual) maximo = mitad - 1;
        else minimo = mitad + 1;
    }
    return indice_menor;
}

function encontar_mayor_indice(numeros: number[], objetivo: number): number {
    let minimo: number = 0;
    let maximo: number = numeros.length - 1;
    let indice_mayor: number = -1;

    while (minimo <= maximo) {
        let mitad: number = Math.trunc((minimo + maximo) / 2);
        let actual: number = numeros[mitad];
        let todo_mal_actual: boolean = restriccion(actual, -Math.pow(10, 5), Math.pow(10, 5)); // [-10^9 ; 10^9] intervalo cerrado

        if (todo_mal_actual) return -1;

        if (actual === objetivo) indice_mayor = mitad;

        if (objetivo >= actual) minimo = mitad + 1;
        else maximo = mitad - 1;
    }
    return indice_mayor;
}

function restriccion(numero: number, minimo: number, maximo: number): boolean {
    if (!(numero >= minimo && numero <= maximo)) return true;

    return false;
}

export { encontrar_posicion_final_e_inicial };
