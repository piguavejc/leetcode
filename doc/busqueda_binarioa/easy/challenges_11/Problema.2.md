33 . Buscar en matriz ordenada rotada
Hay una matriz de enteros numsordenada en orden ascendente (con valores distintos ).

Antes de pasar a su función, posiblementenums se gire en un índice de pivote desconocido ( ) de modo que la matriz resultante sea ( 0-indexada ). Por ejemplo, podría rotarse en el índice de pivote y convertirse en .k1 <= k < nums.length[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]][0,1,2,4,5,6,7]3[4,5,6,7,0,1,2]

Dada la matriz nums después de la posible rotación y un número entero target, devuelve el índice de targetsi está dentro numso -1si no está dentronums .

Debe escribir un algoritmo con O(log n)complejidad de tiempo de ejecución.

Ejemplo 1:

Entrada: nums = [4,5,6,7,0,1,2], destino = 0
Salida: 4
Ejemplo 2:

Entrada: nums = [4,5,6,7,0,1,2], destino = 3
Salida: -1
Ejemplo 3:

Entrada: nums = [1], destino = 0
Salida: -1

Restricciones:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
Todos los valores de numsson únicos .
numses una matriz ascendente que posiblemente se gira.
-104 <= target <= 104
