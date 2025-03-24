import React from 'react'

export default function Product({product,org}) {
  return (
    <div>
        <h3>Prodcut Details - {org}</h3> 
        <ul>
            <li> Name : {product.name} </li>
            <li> Price : {product.price}</li>
        </ul>
     
    </div>
  )
}


// props {
//     product{
//         name,price
//     }
// }