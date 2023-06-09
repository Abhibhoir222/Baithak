export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
  return (
    <>
      <section>
        <article className="my-5 flex items-end justify-end">
          <ul>
            <li className="p-1">
              <span className="font-bold">invoce number:</span>
              {invoiceNumber}
            </li>
            <li className=" p-1 bg-gray-100">
              <span className="font-bold">Invoice Date:</span>
              {invoiceDate}
            </li>
            <li className="p-1">
              <span className="font-bold">Due Date:</span>
              {dueDate}
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
