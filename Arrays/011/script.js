/**
 * Dado un array de strings existe la palabra clave "myKey" y debes retornar 
 * la posición dentro del array en donde se encuentra este string y 
 * si no está debes retornan un false.
 * La solución debería tener un input y output como los siguientes:

solution(["diamonds", "myKey", "spades", "AS"]);
solution(["diamonds", "hearts", "spades"]);
solution(["myKey", "hearts", "spades"]);
 * 
Output
1
false
0
 */
function solution(words) {
  // Tu código aquí 👈 
const index = words.indexOf("myKey")
return index>-1 ? index:false;
}; 

console.log( solution(["diamonds", "myKey", "spades", "AS"]) );
console.log( solution(["diamonds", "hearts", "spades"]) );
console.log( solution(["myKey", "hearts", "spades"]) )


