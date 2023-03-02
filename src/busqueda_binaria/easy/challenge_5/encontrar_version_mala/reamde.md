_Usted es director de producto y actualmente dirige un equipo para desarrollar un nuevo producto. Por desgracia, la última versión de su producto no pasa el control de calidad. Dado que cada versión se desarrolla sobre la base de la versión anterior, todas las versiones posteriores a una versión mala son también malas._

_Supongamos que tienes n versiones [1, 2, ..., n] y quieres averiguar cuál es la primera mala, que hace que todas las siguientes sean malas._

_Se le da una API bool isBadVersion(version) que devuelve si la versión es mala. Implementa una función para encontrar la primera versión mala. Debes minimizar el número de llamadas a la API._

##### Ejemplo 1

```typescript
// Entrada:
let numero: number = 5;
let malo: number = 4;
// Salida: 4
/*
Explicacion:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
*/
```

##### Ejemplo 2

```typescript
// Entrada:
let numero: number = 1;
let malo: number = 1;
// Salida: 1
```

##### Restricciones

- `1 <= malo <= n <= (2^31 - 1)`


#### _Resultado:_
![captura de los test del desafio](https://github.com/jean-carlos-19/leetcode/blob/master/captura/challengue-5-01.png)
