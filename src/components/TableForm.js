import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

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
  setList,
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false);

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      discription,
      quantity,
      price,
      amout,
    };
    setDiscription("");
    setQuantity("");
    setPrice("");
    setAmount("");
    setList([...list, newItems]);
    setIsEditing(false);
    console.log(list);
  };
  //calculate item Amount Function
  useEffect(() => {
    const calculateAmount = (amout) => {
      setAmount(quantity * price);
    };

    calculateAmount(amout);
  }, [amout, price, quantity, setAmount]);

  //calculate Totale Mount of itme table

  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  }); 
// we did not use the [] arry to set the value becasue the reasone then the vale of the setTotle vale chaneg then and the only the useEffect run. if you don't want to render on everychnage then do't keep in [].
 

  // Edit Button
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDiscription(editingRow.discription);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };

  // Delete button
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

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
          {isEditing ? "Editing Rwo Item" : "Add Table Item"}
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
          {list.map(({ id, discription, quantity, price, amout }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr>
                  <td>{discription}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td className="amount">{amout}</td>
                  <td>
                    <button onClick={() => deleteRow(id)}>
                      <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => editRow(id)}>
                      <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          ))}
        </table>
        <div>
          <h2 className=" flex items-end justify-end text-gray-800 text-4xl font-bold">
            Rs.{total.toLocaleString()}
          </h2>
        </div>
      </form>
    </>
  );
}
