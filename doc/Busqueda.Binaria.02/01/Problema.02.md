#### _Número de triángulo válido_

_Dada una matriz de enteros nums, devuelva el número de trillizos elegidos de la matriz que pueden formar triángulos si los tomamos como longitudes de los lados de un triángulo ._

##### _Ejemplo 1_

```typescript
// Entrada:
let numeros: number[] = [2, 2, 3, 4];
// Salida: 3
// Explicación: Las combinaciones válidas son:
// 2,3,4 (usando los 2 primeros)
// 2,3,4 (usando el segundo 2)
// 2,2,3
```

##### _Ejemplo 2_

```typescript
// Entrada:
let numeros: number[] = [4, 2, 3, 4];
// Salida: 4
```

##### _Restricciones_

- 1 <= nums.length <= 1000
- 0 <= nums[i] <= 1000
