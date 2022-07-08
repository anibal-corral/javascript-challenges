/**
 * Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.
 * Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.
 * La solución debería tener un input y output como los siguientes:
 * 
 * [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  },
  ...
]

OUTPUT
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
    taxes: 190
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
    taxes: 380
  },
  ...
]
 */

const input = [
    { name: "Product 1",  price: 1000, stock: 10},
    { name: "Product 2",  price: 2000, stock: 20}
  ]

  function solve(array){
    let result = [];
    result = array.map((product)=>{
        const newProduct = {
            ...product,
            taxes:product.price*0.19
        }
    return newProduct;
    });
// console.log(result);
return  result;
  }



console.log(solve(input));
  

