### _Dos Sumas II - La matriz de entrada está ordenada_

_Dada una matriz de números enteros con un índice 1 que ya está ordenada de forma no decreciente, **encuentre dos números** que **sumen un número objetivo** específico. Sean estos **dos números** `números[índice1]` y `números[índice2]` donde `1 <= índice1 < índice2 <= números.longitud.`_

_Devuelve los índices de los dos números, índice1 e índice2, sumados por uno como una matriz de enteros [índice1, índice2] de longitud 2._

_Las pruebas se generan de forma que haya exactamente una solución. No puede utilizar el mismo elemento dos veces._

_Su solución debe utilizar sólo un espacio extra constante._

##### Ejemplo 1

```typescript
// Entrada:
let numeros: number[] = [2, 7, 11, 15];
let objetivo: number = 9;
// Salida: [1,2]
/* Explicación: La suma de 2 y 7 es 9. Por tanto, índice1 = 1, índice2 = 2. Devolvemos [1, 2].
 */
```

##### Ejemplo 2

```typescript
// Entrada:
let numeros: number[] = [2, 3, 4];
let objetivo: number = 6;
// Salida: [1,3]
/* Explicación: La suma de 2 y 4 es 6. Por lo tanto índice1 = 1, índice2 = 3. Devolvemos [1, 3]. */
```

##### Ejemplo 3

```typescript
Entrada: let numeros: number[] = [-1, 0];
let objetivo: number = -1;
// Salida: [1,2]
/* Explicación: La suma de -1 y 0 es -1. Por lo tanto índice1 = 1, índice2 = 2. Devolvemos [1, 2]. */
```

#### Restricciones

-   `2 <= números.longitud <= 3 * 10^4 || [2 ; (3 * 10^4)]`
-   `-1000 <= números[i] <= 1000 || [-1000 ; 1000]`
-   _números se ordena en orden no decreciente._
-   `-1000 <= objetivo <= 1000 || [-1000 ; 1000]`
-   _Las pruebas se generan de forma que haya - exactamente una solución._
