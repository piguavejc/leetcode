function encontrar_version_mala(numero) {
    let minimo = 1;
    let maximo = numero;
    let respuesta_actual = isBadVersion(minimo);
    let resultado = 0;
    if (respuesta_actual)
        return minimo;
    while (minimo <= maximo) {
        let mitad = Math.trunc((minimo + maximo) / 2);
        let respuesta = isBadVersion(mitad);
        if (respuesta) {
            resultado = mitad;
            maximo = mitad - 1;
        }
        else
            minimo = mitad + 1;
    }
    let todo_mal = restriccion(1, Math.pow(2, 31) - 1, numero, resultado); /* [1 ; (2^31 - 1)] */
    if (todo_mal)
        return null;
    return resultado;
}
function restriccion(minimo, maximo, numero, objetivo) {
    if (!(objetivo >= minimo && objetivo <= numero))
        return true;
    if (!(numero >= objetivo && numero <= maximo))
        return true;
    return false;
}
function isBadVersion(numero) {
    return true;
}
