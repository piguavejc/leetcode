#### _Intersección de dos matrices II_

_Dados dos arrays de enteros nums1 y nums2, devuelva un array con su intersección. Cada elemento del resultado debe aparecer tantas veces como aparezca en ambas matrices y puede devolver el resultado en cualquier orden._

##### _Ejemplo 1_

```typescript
// Entrada:
let nums1: number[] = [1, 2, 2, 1];
let nums2: number[] = [2, 2];
// Salida: [2,2]
```

##### _Ejemplo 2_

```typescript
// Entrada:
let nums1: number[] = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
// Salida: [4,9]
// Explicación: También se acepta [9,4].
```

##### _Restricciones_

-   `1 <= nums1.length, nums2.length <= 1000`
-   `0 <= nums1[i], nums2[i] <= 1000`

##### _Seguimiento:_

-   _¿Qué pasa si el array dado ya está ordenado? ¿Cómo optimizarías tu algoritmo?_
-   _¿Y si el tamaño de nums1 es pequeño comparado con el de nums2? ¿Qué algoritmo es mejor?_
-   _¿Y si los elementos de nums2 están almacenados en el disco, y la memoria es limitada de tal manera que no puedes cargar todos los elementos en la memoria a la vez?_
