/**
 * En este desafío vas a recibir un array de string y debes retornar un string
 * en donde cada elemento del array esté separado por comas.
 * La solución debería tener un input y output como los siguientes:

solution(["amor", "sol", "piedra", "día"]);
solution(["diamonds", "hearts", "spades"]);
 * 
Output
"amor,sol,piedra,día"
"diamonds,hearts,spades"
 */
function solution(words) {
  // Tu código aquí 👈 
  return words.join(',')

}; 

console.log(solution(["amor", "sol", "piedra", "día"]) );
console.log( solution(["diamonds", "hearts", "spades"]) );



