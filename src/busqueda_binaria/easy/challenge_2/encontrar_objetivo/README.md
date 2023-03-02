### _Cuadrado perfecto válido_

_Dado un **array ordenado** de enteros **distintos** y un valor **objetivo**, devuelve el **índice** si se encuentra el **objetivo**. Si no, devolver el **índice** donde estaría si se **insertara** en orden._

- _Debe **escribir** un **algoritmo** con **complejidad** de **tiempo** de ejecución **O(log n).**_

#### _Ejemplo 1_

```typescript
// Entrada:
let numeros: number[] = [1, 3, 5, 6];
let objetivo: number = 5;
// Salida: 2
```

#### _Ejemplo 2_

```typescript
// Entrada:
let numeros: number[] = [1, 3, 5, 6];
let objetivo: number = 2;
// Salida: 1
```

#### _Ejemplo 3_

```typescript
// Entrada:
let numeros: number[] = [1, 3, 5, 6];
let objetivo: number = 7;
// Salida: 4
```

#### _Restricciones_

- _**1** `<=` **numeros.length** `<=` **10^4** `|---|` **[1 : 10^4]**_
- _**-10^4** `<=` **numeros[i]** `<=` **10^4** `|---|` **[-10^4 : 10^4]**_
- _numeros contiene valores distintos ordenados de forma ascendente._
- _**-10^4** `<=` **objetivo** `<=` **10^4** `|----|` **[-10^4 ; 10^4]**_

#### _Resultado:_
![captura de los test del desafio](https://github.com/jean-carlos-19/leetcode/blob/master/captura/challengue-2-01.png)
