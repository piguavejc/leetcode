_Tienes **n** monedas y quieres construir una **escalera** con estas monedas. **La escalera** consta de **k filas** en las que la **iª fila tiene exactamente i monedas**. La **última** fila de la **escalera** puede estar **incompleta**._

_**Dado el número entero numero, devuelva el número de filas completas de la escalera que va a construir.**_

##### Ejemplo 1

![ejemplo 1](../assets/06/figura-1.jpg)

```typescript
// Entrada:
let numero: number = 5;
// Salida: 2
// Explicacion: Como la tercera fila está incompleta, devolvemos 2.
```

##### Ejemplo 2

![ejemplo 2](../assets/06/figura-2.jpg)

```typescript
// Entrada:
let numero: number = 8;
// Salida: 3
// Explicacion: Como la cuarta fila está incompleta, devolvemos 3.
```

##### Restriciones

- `1 <= n <= 2^31 -1 || [1 ; 2^31]`

#### _Resultado:_
![captura de los test del desafio](https://github.com/jean-carlos-19/leetcode/blob/master/captura/challengue-6-1.png)
