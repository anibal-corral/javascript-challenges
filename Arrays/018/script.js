/**
 * Tienes un array con palabras y tienes que retornar un array ordenado de la 
 * palabra con menos caracteres a la palabra con más caracteres.
 * La solución debería funcionar algo similar:
 * solution([
  "Hola",
  "Viajar",
  "Sol",
  "Aprender"
])
  

output
[
  "Sol",
  "Hola",
  "Viajar",
  "Aprender"
]
 */
function solution(array) {
  // Tu código aquí 👈 
  return array.sort((a,b)=>a.length - b.length)
}; 

console.log(solution([
  "Hola",
  "Viajar",
  "Sol",
  "Aprender"
]));




