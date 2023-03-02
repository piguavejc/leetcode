### _Las K filas más débiles de una matriz_

_Se le da una matriz binaria m x n de 1's (que representan a los soldados) y 0's (que representan a los civiles). Los soldados se colocan delante de los civiles. Es decir, todos los 1 aparecerán a la izquierda de todos los 0 de cada fila._

_Una fila i es más débil que una fila j si se cumple una de las siguientes condiciones_

- _El número de soldados de la fila i es menor que el de la fila j._
- _Ambas filas tienen el mismo número de soldados e i < j._

_Devuelve los índices de las k filas más débiles de la matriz ordenados del más débil al más fuerte._

#### _Ejemplo 1_

```typescript
// Entrada:
let mat: number[][] = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
let k: number = 3;
// Salida: [2,0,3]
// Explicación:
// El número de soldados en cada fila es:
// - Fila 0: 2
// - Fila 1: 4
// - Fila 2: 1
// - Fila 3: 2
// - Fila 4: 5
// Las filas ordenadas de más débil a más fuerte son [2,0,3,1,4].
```

#### _Ejemplo 2_

```typescript
// Entrada:
let mat: number[][] = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
];
let k: number = 2;
// Salida: [0,2]
// Explicación:
// El número de soldados en cada fila es:
// - Fila 0: 1
// - Fila 1: 4
// - Fila 2: 1
// - Fila 3: 1
// Las filas ordenadas del más débil al más fuerte son [0,2,3,1].
```

#### _Restricciones_

- `m == mat.length [m ; n]`
- `n == mat[i].length [n ; m]`
- `2 <= n, m <= 100 [2 ; n] - [ m ; 100] `
- `1 <= k <= m [1 ; m] `
- `matrix[i][j] es 0 o 1.`
#### _Resultado:_
![captura de los test del desafio](https://github.com/jean-carlos-19/leetcode/blob/master/captura/challengue-9-1.png)
