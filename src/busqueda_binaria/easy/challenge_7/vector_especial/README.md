### _Matriz especial con X elementos mayores o iguales a X_

_Se le da una matriz nums de enteros no negativos. nums se considera especial si existe un número x tal que hay exactamente x números en nums que son mayores o iguales a x._

_Observe que x no tiene que ser un elemento de nums._

_Devuelve x si la matriz es especial, en caso contrario, devuelve -1. Se puede demostrar que si nums es especial, el valor de x es único._

#### _Ejemplo 1_

```typescript
Entrada: let numeros: number[] = [3, 5];
// Salida: 2
// Explicación: Hay 2 valores (3 y 5) que son mayores o iguales a 2.
```

#### _Ejemplo 2_

```typescript
// Entrada:
let numeros: number[] = [0, 0];
// Salida: -1
// Explicación: Ningún número se ajusta a los criterios de x.
// Si x = 0, debería haber 0 números >= x, pero hay 2.
// Si x = 1, debería haber 1 número >= x, pero hay 0.
// Si x = 2, debería haber 2 números >= x, pero hay 0.
// x no puede ser mayor ya que sólo hay 2 números en nums.
```

#### _Ejemplo 3_

```typescript
// Entrada:
let numeros: number[] = [0, 4, 3, 0, 4];
// Salida: 3
// Explicación: Hay 3 valores que son mayores o iguales a 3.
```

#### _Restricciones_

- `1 <= numeross.length <= 100 || [1 ; 100]`
- `0 <= numeross[i] <= 1000 || [0 ; 1000]`

#### _Resultado:_

![captura de los test del desafio](https://github.com/jean-carlos-19/leetcode/blob/master/captura/challengue-7-2.png)
