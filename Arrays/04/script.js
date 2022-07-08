/**
ienes un array de ordenes de compra con los siguientes atributos:

customerName: string
total: number
delivered: boolean
Debes filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100 y además que el estado delivered sea "true".

La solución debería tener un input y output como los siguientes:

solution([
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  ...
]);

Output

[
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
]
 */

const input = [
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },]

  function solve(array){
    return array.filter((buy)=>(buy.total>=100 && buy.delivered==true));
  }
console.log(solve(input));
  

