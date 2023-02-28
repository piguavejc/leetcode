### _Adivina el número más alto o más bajo_

_Estamos **jugando** al juego de las **adivinanzas**. El juego es el siguiente:_

_Yo **elijo** un número del **1** `al` **n**. Tú tienes que **adivinar** qué número he **elegido.**_

_Cada vez que te **equivoques**, te diré si el **número** que he **escogido** es mayor o **menor** que el **tuyo.**_

_**Llamas** a una **API** predefinida int **guess(int numero)**, que devuelve **tres** posibles **resultados:**_

- _**-1:** Su **respuesta** es **mayor** que el **número** que yo **elegí** (es decir, **numero** `>` **objetivo**)._
- _**1:** Su **respuesta** es **menor** que el **número** que **elegí** (es decir, **numero** `<` **objetivo**)._
- _**0:** Su **respuesta** es **igual** al **número** que **elegí** (es decir, **numero** `=` **objetivo**)._

- _**Devuelve el número que elegí.**_

#### _Ejemplo 1:_

```typescript
// Entrada:
let numero: number = 10;
let objetivo: number = 6;
// Salida: 6
```

#### _Ejemplo 2:_

```typescript
// Entrada:
let numero: number = 1;
let objetivo: number = 1;
// Salida: 1
```

#### _Ejemplo 3:_

```typescript
// Entrada:
let numero: number = 2;
let objetivo: number = 1;
// Salida: 1
```

#### _Restricciones:_

- _**1** `<=` **n** `<=` **(2^31 - 1)** `|----|` **[1 : (2^31 - 1)]**_
- _**1** `<=` **objetivo** `<=` **n** `|----|` **[1 : n ]**_
