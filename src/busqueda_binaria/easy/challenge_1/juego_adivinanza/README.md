### _Busqueda Binaria_

_Dada una **matriz** de números **enteros** que está ordenada en forma **ascendente**, y un **objetivo** entero._

- _Escriba una **función** para buscar el **objetivo** en números. Si el **objetivo** existe, devuelve su **índice**._

- _En caso contrario, **devuelve -1**._

- _Debe escribir un algoritmo con una complejidad de tiempo de ejecución **O(log n)**._

#### _Ejemplo 1:_

```typescript
// Entrada:
let numeros: number[] = [-1, 0, 3, 5, 9, 12];
let objetivo: number = 9;
// Salida: 4
// Explicación: 9 existe en nums y su índice es 4
```

#### _Ejemplo 2:_

```typescript
// Entrada:
let numeros: number[] = [-1, 0, 3, 5, 9, 12];
let objetivo: number = 2;
// Salida: -1
// Explicación: 2 no existe en nums así que devuelve -1
```

#### _Restricciones:_

- _**1** `<=` **nums.length** `<=` **10^4** `|----|` **[1 ; 10^4]**_
- _**-10^4** `<` **números[i]** `|----|` **[-10^4 : actual]**_
- _**objetivo** `<` **10^4** `|----|` **[objetivo : 10^4]**_
- _Todos los enteros de numeros son únicos._
- _Números se ordena en orden ascendente_

#### _Resultado:_
![captura de los test del desafio](https://github.com/jean-carlos-19/leetcode/blob/master/captura/challengue-1-02.png)
