/**
 * En este desafío recibirás dos arrays de números como parámetros de entrada
 * y debes retornar un array que tenga los dos arrays unidos.
 * 
 * La solución debería tener un input y output como los siguientes:

Input

solution([1, 2, 3], [4, 5, 6]);
solution(["A", "B", "C"], ["D", "E", "H"]);
OUTPUT
[1, 2, 3, 4, 5 , 6]
["A", "B", "C", "D", "E", "H"]
 */

function solution(arrayA, arrayB) {
  
return arrayA.concat(arrayB)
}; 

console.log(solution([1, 2, 3], [4, 5, 6]));
console.log(solution(["A", "B", "C"], ["D", "E", "H"]));



