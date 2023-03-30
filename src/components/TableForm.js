import React, { useEffect } from "react";
import {v4 as uuidv4} from "uuid";
export default function TableForm({
  setDiscription,
  discription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amout,
  setAmount,
  list,
  setList
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems={
      id:uuidv4(),
      discription,
      quantity,
      price,
      amout,
    }
    setDiscription("")
    setQuantity("")
    setPrice("")
    setAmount("")
    setList([...list,newItems])
    console.log(list);
  };

  useEffect(() => {
    const calculateAmount = (amout) => {
      setAmount(quantity * price);
    };

    calculateAmount(amout);
  }, [amout, price, quantity, setAmount]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description"> Item Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description "
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10 ">
          <div className="flex flex-col">
            <label htmlFor="quantity"> Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity "
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price"> Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amout}</p>
          </div>
        </div>
        <button
          type="submit"
          className=" mb-5 bg-blue-300 py-2 px-8 rounded text-white font-bold shadow border-2 border-blue-500 hover:bg-transparent 
                hover: text-blue-500 
                transition-all duration-300"
        >
          Add Table Item
        </button>
        {/* Table Item */}
        <table width="100%" className="mb-10">
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
      </form>
    </>
  );
}
