/**
 * En este desafío vas a tener un string y debes buscar si ese string tiene un 
 * término de búsqueda, por ejemplo verificar si dentro de la frase 
 * "Ana lava la tina" está el término "ana" y si lo tiene retornar un true 
 * de lo contrario retornar un false, debes tener en cuenta que debe encontrar 
 * coincidencias, así la el término de búsqueda sea mayúscula o minúscula.
 * La solución debería tener un input y output como los siguientes:
 * solution("Ana lava la tina", "ana");
 * solution("Santiago", "tiago");
 * solution("Nicolas", "ana");
 * Output
 * true
 * true
 * false
 */
 function solution(word, query) {
  if(word.toUpperCase().search(query.toUpperCase())>-1){
    return true;
  }else{
    return false;
  }

}; 
console.log(solution('Ana lava la tina', 'ana'));
console.log(solution("Santiago", "tiago"));
console.log(solution("Nicolas", "ana"));

