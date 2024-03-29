import React from "react";
export default function Table({ list,discription, quantity, price, amout,total }) {
  return (
    <>
     <table   width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-200 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({id,discription,quantity,price,amout})=>
          <React.Fragment key={id }>
        <tbody>
          <tr>
            <td>{discription}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{amout}</td>
          </tr>
        </tbody>
          </React.Fragment>
        )}
      </table>

      <div>
          <h2 className="flex items-end justify-end text-gray-800 text-4lx font-bold">
            Rs.{total.toLocaleString()}
          </h2>
        </div>
    </>
  );
}
