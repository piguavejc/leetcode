#### _Contar números negativos en una matriz ordenada_

_Dada una rejilla de matriz m x n que está ordenada en orden no creciente tanto por filas como por columnas, devuelva el número de números negativos en la rejilla._

##### _Ejemplo 1_

```typescript
// Entrada:
let rejilla: number[] = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
// Salida: 8
// Explicación: Hay 8 números negativos en la matriz.
```

##### _Ejemplo 2_

```typescript
// Entrada:
let rejilla: number[] = [
  [3, 2],
  [1, 0],
];
// Salida: 0
```

##### _Restricciones_

- `m == rejilla.length [m ; n]`
- `n == rejilla[i].length [n ; m]`
- `1 <= m, n <= 100 || [1 ; m] - [n ; 100]`
- `-100 <= rejilla[i][j] <= 100 || [-100 ; 100]`

##### _Siga: ¿Podrías encontrar una solución `O(n + m)`?_


#### _Resultado:_
![captura de los test del desafio](https://github.com/jean-carlos-19/leetcode/blob/master/captura/challengue-8-1.png)
