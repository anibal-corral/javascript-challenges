/**
Tienes un array de órdenes de compra con los siguientes atributos:

customerName: string
total: number
delivered: boolean
Debes retornar la suma total de todas las órdenes de compra.

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
OUTPUT
220
 */
 function solution(orders) {
  const sum = orders.reduce((sumTotal, order) => order.total + sumTotal, 0)
  return sum;

}; 
console.log(solution([
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  }])
)
