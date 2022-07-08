const input = [{
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },]

function solve(data){
console.log(data);
const stringArray = data.map((obj)=>obj.name);
console.log(stringArray);
}

solve(input);