#### _###_ _Distancia máxima entre un par de valores_

_Se le dan dos matrices de enteros indexados 0 no crecientes nums1 y nums2._

_Un par de índices (i, j), donde 0 <= i < nums1.lengthy 0 <= j < nums2.length, es válido si ambos i <= jy nums1[i] <= nums2[j]. La distancia de la pareja es j - i._

_Devuelve la distancia máxima de cualquier par válido(i, j) . Si no hay pares válidos, devuelve0 ._

_Una matriz no arres creciente si arr[i-1] >= arr[i]para cada 1 <= i < arr.length._

#### _Ejemplo 1:_

```typescript
// Entrada:
let nums1: number[] = [55, 30, 5, 4, 2];
let nums2: number[] = [100, 20, 10, 10, 5];
// Salida: 2
// Explicación: Los pares válidos son (0,0), (2,2), (2,3), (2,4), (3,3), (3,4) y (4,4).
// La distancia máxima es de 2 con pareja (2,4).
```

#### _Ejemplo 2:_

```typescript
// Entrada:
let nums1: number[] = [2, 2, 2];
let nums2: number[] = [10, 10, 1];
// Salida: 1
// Explicación: Los pares válidos son (0,0), (0,1) y (1,1).
// La distancia máxima es 1 con par (0,1).
```

#### _Ejemplo 3:_

```typescript
// Entrada:
let nums1: number[] = [30, 29, 19, 5];
let nums2: number[] = [25, 25, 25, 25, 25];
// Salida: 2
// Explicación: Los pares válidos son (2,2), (2,3), (2 ,4), (3,3) y (3,4).
// La distancia máxima es de 2 con pareja (2,4).
```

#### _Restricciones:_

- _1 <= nums1.length, nums2.length <= 10^5_
- _1 <= nums1[i], nums2[j] <= 10^5_
- _Ambos nums1y nums2son no crecientes ._

#### _Resultado:_

![captura de los test del desafio](https://github.com/jean-carlos-19/leetcode/blob/master/captura/challengue-?-?.png)
