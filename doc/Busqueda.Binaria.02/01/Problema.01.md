### _Suma de subarreglo de tamaño mínimo_

_Dada una matriz de enteros positivos nums y un entero positivo objetivo, devuelve la longitud mínima de una submatriz contigua **[nums, nums+1, ..., numsr-1, numsr]** cuya suma sea mayor o igual al objetivo. Si no existe tal submatriz, devuelve 0 en su lugar._

#### _Ejemplo 1:_

```typescript
// Entrada:
let objetivo: number = 7;
let numeros: number[] = [2, 3, 1, 2, 4, 3];
// Salida: 2
// Explicación: El subarreglo [4,3] tiene la longitud mínima bajo la restricción del problema
```

#### _Ejemplo 2:_

```typescript
// Entrada:
let objetivo: number = 4;
let numeros: number[] = [1, 4, 4];
//  Salida: 1
```

#### _Ejemplo 3:_

```typescript
// Entrada:
let objetivo: number = 11;
let numeros: number[] = [1, 1, 1, 1, 1, 1, 1, 1];
//  Salida: 0
```

#### _Restricciones:_

- **1** `<=` **target** `<=` **10^9** `|----|` **[1 : 10^9]**
- **1** `<=` **nums.length** `<=` **10^5** `|----|` **[1 : 10^5]**
- **1** `<=` **nums[i]** `<=` **10^5** `|----|` **[1 : 10^5]**
