/**
 * En este desafío tienes un array de números el cual va a tener tanto números 
 * negativos como positivos y el reto es usando la función sort de 
 * JavaScript ordenarlos de mayor a menor.
 * La solución debería tener un input y output como los siguientes:

Input
solution([3, 1, 11, 5, 2, 7, 8]);
output
[ 11, 8, 7, 5, 3, 2, 1 ]
 */
function solution(array) {
  // Tu código aquí 👈 
  return array.sort((a,b)=>b-a)
}; 

console.log(solution([3, 1, 11, 5, 2, 7, 8]));




