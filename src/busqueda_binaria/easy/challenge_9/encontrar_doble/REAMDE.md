### _Comprobar si N y su doble existen_

_Dada una matriz arr de enteros, comprueba si existen dos enteros N y M tales que N es el doble de M ( es decir, N = 2 \* M)._

_Más formalmente, compruebe si existen dos índices i y j tales que :_

- _i != j_
- _0 <= i, j < arr.length_
- _arr[i] == 2 \* arr[j]_

#### _Ejemplo 1_

```typescript
// Entrada:
let array: number[] = [10, 2, 5, 3];
// Salida: true
// Explicación: N = 10 es el doble de M = 5, es decir, 10 = 2 * 5.
```

#### _Ejemplo 2_

```typescript
// Entrada:
let array: number[] = [7, 1, 14, 11];
// Salida: true
// Explicación: N = 14 es el doble de M = 7, es decir, 14 = 2 * 7.
```

#### _Ejemplo 3_

```typescript
// Entrada:
let array: number[] = [3, 1, 7, 11];
// Salida: false
// Explicación: En este caso no existe N y M, tal que N = 2 * M.
```

# _Restricciones_

- `2 <= arr.length <= 500`
- `-10^3 <= arr[i] <= 10^3`
