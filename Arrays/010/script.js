/**
Dado un array de string que son nombres de cartas de poker debes retornar la 
palabra "AS" si dentro de tu baraja tienes un "AS" y un false si no lo tienes.
La solución debería tener un input y output como los siguientes:

d

Output

"AS"
false
 * 
 */
function solution(cards) {
  // Tu código aquí 👈
  return cards.find(card => card =="AS")?"AS":false
  
}; 

console.log(solution(['diamonds', 'hearts', 'spades', 'AS']));
console.log(solution(['diamonds', 'hearts', 'spades']));


