function numeros_negativos(numeros: number[][]): number {
    let n: number = numeros.length;
    let contador: number = 0;

    let todo_mal_m: boolean = restriccion_1(n, 100); /* [n ; 100] */

    if (todo_mal_m) return null;

    for (let i: number = 0; i < n; i++) {
        let m: number = numeros[i].length;
        let actual: number = numeros[i][0];
        let ultimo: number = numeros[i][m - 1];

        // if (!(n === m)) return null; /* [n ; m] */

        if (actual < 0 && ultimo < 0) {
            contador += m;
            continue;
        }
        if (ultimo < 0) {
            let resultado = busqueda_binaria(numeros[i]);
            contador += resultado;
        }
    }
    return contador;
}

function busqueda_binaria(numeros: number[]): number {
    let m: number = numeros.length;
    let minimo: number = 0;
    let maximo: number = m - 1;
    let todo_mal_n: boolean = restriccion_1(1, m); /* [1 ; m] */

    if (todo_mal_n) return null;

    while (minimo <= maximo) {
        let mitad: number = Math.trunc((minimo + maximo) / 2);
        let actual: number = numeros[mitad];
        let siguiente: number = numeros[mitad + 1];
        let todo_mal_actual: boolean = restriccion_2(-100, 100, actual); /* [-100 ; 100] */

        if (todo_mal_actual) return null;

        if (actual >= 0 && siguiente < 0) return m - mitad - 1;

        if (siguiente >= 0) minimo = mitad + 1;
        else maximo = mitad - 1;
    }
    return 0;
}

function restriccion_1(indicado: number, objetivo: number): boolean {
    if (!(indicado <= objetivo)) return true;

    return false;
}

function restriccion_2(minimo: number, maximo: number, objetivo: number): boolean {
    if (!(objetivo >= minimo && objetivo <= maximo)) return true;

    return false;
}

export { numeros_negativos };
