function k_filas_mas_debil_matriz(numeros: number[][], objetivo: number): number[] {
    let n: number = numeros.length;
    let respuesta: Respuesta[] = new Array(n);
    let todo_mal_n: boolean = restriccion_1(2, n); /* [2 ; n] */

    if (todo_mal_n) return null;

    for (let i: number = 0; i < n; i++) {
        let m: number = numeros[i].length;
        let inicial: number = numeros[i][0];
        let final: number = numeros[i][m - 1];
        let todo_mal_objetivo: boolean = restriccion_3(1, n, objetivo); /* [1 ; m] */

        // if (!(n === m)) return null; /* [n ; m] */
        if (todo_mal_objetivo) return null;

        if (inicial === 1 && final === 1) {
            respuesta[i] = new Respuesta(i, m);
            continue;
        }
        if (!(inicial === 0 && final === 0)) {
            let fila: number[] = numeros[i];
            let conteo: number = busqueda_soldado(fila);
            respuesta[i] = new Respuesta(i, conteo);
        } else respuesta[i] = new Respuesta(i, 0);
    }

    respuesta = respuesta.sort((a: Respuesta, b: Respuesta) => {
        return a.obtener_conteo() - b.obtener_conteo();
    });

    let solucion: number[] = [];

    for (let i: number = 0; i < respuesta.length; i++) {
        let actual: Respuesta = respuesta[i];
        const indice = actual.obtener_indice();
        if (i < objetivo) solucion.push(indice);
    }

    return solucion;
}

function busqueda_soldado(fila: number[]): number {
    let longitud: number = fila.length;
    let minimo: number = 0;
    let maximo: number = longitud - 1;
    let todo_mal_m: boolean = restriccion_1(longitud, 100); /* [m ; 100] */

    if (todo_mal_m) return null;

    while (minimo <= maximo) {
        let mitad: number = Math.trunc((minimo + maximo) / 2);
        let anterior: number = fila[mitad - 1];
        let actual: number = fila[mitad];
        let siguiente: number = fila[mitad + 1];
        let todo_mal_actual: boolean = restriccion_2(actual); /* [0 ; 1] */

        if (todo_mal_actual) return null;

        if (anterior === 1 && actual === 0) return mitad;

        if (mitad < longitud) {
            if (actual === 1 && siguiente === 0) return mitad + 1;
        }

        if (anterior === 0) maximo = mitad - 1;

        if (siguiente === 1) minimo = mitad + 1;
    }
    return 0;
}

function restriccion_1(minimo: number, maximo: number): boolean {
    if (!(minimo <= maximo)) return true;
    return false;
}

function restriccion_2(objetivo: number): boolean {
    if (!(objetivo === 1 || objetivo === 0)) return true;
    return false;
}

function restriccion_3(minimo: number, maximo: number, objetivo: number): boolean {
    if (!(objetivo >= minimo && objetivo <= maximo)) return true;
    return false;
}

class Respuesta {
    private indice: number;
    private conteo: number;

    constructor(indice: number, conteo: number) {
        this.indice = indice;
        this.conteo = conteo;
    }

    obtener_indice(): number {
        return this.indice;
    }
    obtener_conteo(): number {
        return this.conteo;
    }
}

export { k_filas_mas_debil_matriz };
