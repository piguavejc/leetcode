### \_\_

_**Llamemos** a un **array** una montaña si se **cumplen** las siguientes **propiedades**_

- _**array.length** `>=` **3** `|----|` **[3 : array.length]**_
- _Existe algún **i** con **0** `<` **i** `<` **array.length - 1** `|----|` **( 0 : (array.length - 1) )** tal que:_
  1. _**array[0]** `<` **arr[1]** `< ...` **array[i-1]** `<` **array[i]**_
  2. _**array[i]** `>` **arr[i+1]** `> ... >` **array[array.length - 1]**_

_Dada una **matriz** de **enteros** array que se **garantiza** que es una **montaña**, **devuelve** cualquier **i** tal que **array[0]** `<` **array[1]** `< ...` **array[i - 1]** `<` **array[i]** `>` **array[i + 1]** `> ... >` **array[array.length - 1]**._

##### _Ejemplo 1:_

```typescript
// Entrada:
let array: number[] = [0, 1, 0];
// Salida: 1
```

##### _Ejemplo 2:_

```typescript
// Entrada:
let array: number[] = [0, 2, 1, 0];
// Salida: 1
```

##### _Ejemplo 3:_

```typescript
// Entrada:
let array: number[] = [0, 10, 5, 2];
// Salida: 1
```

##### _Restricciones:_

- **3** `<=` **array.length** `<=` **10^4** `|----|` **[3 : 10^4 ]**
- **0** `<=` **array[i]** `<=` **10^6** `|----|` **[0 : 10^6 ]**
- _El array está garantizado para ser un conjunto de montañas._

_Siguiendo con el tema: **Encontrar el O(n)** es sencillo, ¿podrías **encontrar** una solución **O(log(n))**?_

#### _Resultado:_

![captura de los test del desafio](https://github.com/jean-carlos-19/leetcode/blob/master/captura/challengue-2-02.png)
