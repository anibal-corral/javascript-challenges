/**
 * En este desafío tienes un array de números y debes retornar true si dentro
 * de los números de ese array todos los números son pares.
 * La solución debería tener un input y output como los siguientes:
 * solution([2, 4, 6, 8, 10]);
 * solution([1, 3, 5, 7, 10, 11]);
 * solution([1, 3, 5]);

Output

true
false
false
 * 
 */
function solution(numbers) {
  return numbers.every((num)=>num%2===0)

}; 

console.log(solution([2, 4, 6, 8, 10]) )
console.log(solution([1, 3, 5, 7, 10, 11]) )
console.log(solution([1, 3, 5]) )


