/**
 * En este desafío tienes array de strings y cada línea es un fragmento, 
 * el Zen de Python, tu reto es hacer un método que retorne el número de palabras 
 * totales que tiene el array.
 * La solución debería tener un input y output como los siguientes:

Input
solution([
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]);

Output

20
 */

function solution(lines) {
  // Tu código aquí 👈 
  // console.log(`Count of phrases => ${lines.length}`)
  // console.log(`Words in phrase 1 => ${lines[0].split(' ').length}`)
  
  return lines.reduce((count,phrase)=>phrase.split(' ').length + count, 0)
  
  
}; 

console.log(solution([
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]));




