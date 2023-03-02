_Dados dos arrays enteros `vector_1` y `vector_2`, y el entero `distancia`, devuelve el `valor` de la distancia entre los `dos arrays`._

_El valor de la distancia se define como el número de elementos `vector_1[i]` **tales que no hay ningún elemento** `vector_2[j]` donde `vector_1[i]-vector_2[j]| <= distancia.`_

##### Ejemplo 1

```typescript
// Entrada:
let vector_1: number[] = [4, 5, 8];
let vector_2: number[] = [10, 9, 1, 8];
let distancia: number = 2;
// Salida: 2
/* Explicacion: 
Para vector_1[0]=4 tenemos: 
|4-10|=6 > d=2 
|4-9|=5 > d=2 
|4-1|=3 > d=2 
|4-8|=4 > d=2 
Para vector_1[1]=5 tenemos: 
|5-10|=5 > d=2 
|5-9|=4 > d=2 
|5-1|=4 > d=2 
|5-8|=3 > d=2
Para vector_1[2]=8 tenemos:
|8-10|=2 <= d=2
|8-9|=1 <= d=2
|8-1|=7 > d=2
|8-8|=0 <= d=2 */
```

##### Ejemplo 2

```typescript
// Entrada:
let vector_1: number[] = [1, 4, 2, 3];
let vector_2: number[] = [-4, -3, 6, 10, 20, 30];
let distancia: number = 3;
// Salida: 2
```

##### Ejemplo 3

```typescript
// Entrada:
let vector_1: number[] = [2, 1, 100, 3];
let vector_2: number[] = [-5, -2, 10, -3, 7];
let distancia: number = 6;
// Salida: 1
```

##### Restricciones

- ` 1 <= vector_1.length, vector_2.length <= 500 || [1 ; n] - [m ; 500]`
- `-1000 <= vector_1[i], vector_2[j] <= 1000 || [1 ; n]`
- `0 <= d <= 100 || [0 ; 100]`

#### _Resultado:_

![captura de los test del desafio](https://github.com/jean-carlos-19/leetcode/blob/master/captura/challengue-3-02.png)
