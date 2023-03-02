## Buscar en una matriz 2D

_Escriba un algoritmo eficiente que busque un valor objetivo en una matriz de m x n enteros. Esta matriz tiene las siguientes propiedades:_

- _Los enteros de cada fila están ordenados de izquierda a derecha._
- _El primer entero de cada fila es mayor que el último entero de la fila anterior._

### _Ejemplo 1_

![](../assets/08/figura-1.jpg)

```typescript
// Entrada:
let matriz: number[] = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let objetivo: number = 3;
// Salida: verdadero
```

### _Ejemplo 2_

![](../assets/08/figura-2.jpg)

```typescript
// Entrada:
let matriz: number[] = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let objetivo: number = 13;
// Salida: falso
```

# Restriciones

- `m == matrix.length [m ; n]`
- `n == matrix[i].length [n ; m] `
- `1 <= m, n <= 100 || [1 ; m] - [n ; 100]`
- `-10^4 <= matrix[i][j], target <= 10^4 || [-10^4 ; matrix[i][j]] [target ; 10^4]`

#### _Resultado:_

![captura de los test del desafio](https://github.com/jean-carlos-19/leetcode/blob/master/captura/challengue-8-2.png)
