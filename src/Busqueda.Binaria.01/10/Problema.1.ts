function restricciones(minimo: number, maximo: number): boolean {
    if (!(minimo <= maximo)) return true;
    return false;
}

function main(numeros_1: number[], numeros_2: number[]): number[] {
    let n: number = numeros_1.length;
    let m: number = numeros_2.length;
    let i: number = 0;
    let j: number = 0;
    let resultado: number[] = [];

    let todo_mal_n: boolean = restricciones(0, n); /* [0 ; n] */

    if (todo_mal_n) return null;

    numeros_1 = numeros_1.sort((a, b) => a - b);
    numeros_2 = numeros_2.sort((a, b) => a - b);

    while (i < n && j < m) {
        if (numeros_1[i] === numeros_2[j]) {
            resultado.push(numeros_1[i]);
            i++;
            j++;
        } else {
            if (numeros_1[i] > numeros_2[j]) j++;
            else i++;
        }
    }
    return resultado;
}
export { main };
