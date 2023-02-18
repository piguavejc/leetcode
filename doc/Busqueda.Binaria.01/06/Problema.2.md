_Dada una matriz arr de enteros positivos ordenados de forma estrictamente creciente, y un número entero k.Encuentra el kº entero positivo que falta en esta matriz._

##### Ejemplo 1

```typescript
// Entrada:
let array: number[] = [2, 3, 4, 7, 11];
let k: number = 5;
// Salida: 9
/* Explicacion: Los enteros positivos que faltan son [1,5,6,8,9,10,12,13,...]. El 5º entero positivo que falta es el 9. */
```

##### Ejemplo 2

```typescript
// Entrada:
let array: number[] = [1, 2, 3, 4];
let k: number = 2;
// Salida: 6
/* Explicacion: Los enteros positivos que faltan son [5,6,7,...]. El segundo entero positivo que falta es el 6. */
```

##### Restricciones

-   `1 <= arr.length <= 1000 || [1 ; 1000]`
-   `1 <= arr[i] <= 1000 || [1 ; 1000]`
-   `1 <= k <= 1000 || [1 ; 1000]` -`arr[i] < arr[j] for 1 <= i < j <= arr.length`
