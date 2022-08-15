/**
 * En este desafío tienes un array que contiene otros arrays internos, 
 * debes retornar un array que tenga los elementos de los otros arrays 
 * eliminando los arrays internos y dejando solo los valores, 
 * normalmente a esto le llamamos aplanar el array o "Flattening Algorithm".
 * La solución debería tener un input y output como los siguientes:
solution([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
Output

[1, 2, 3, 4, 5, 6, 7, 8, 9]

 */

function solution(array) {

    // Tu código aquí 👈 

    return array.flatMap(x => x)
}; 

console.log(solution([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]));




