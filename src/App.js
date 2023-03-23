function App() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 lx:max-w-4xl xl:mx-auto bg-white rounded shadow "> 
        {/* Header */}
        <header className="flex flex-col items-center justify-center md-5 xl:flex-row xl:justify-between ">
          <div>
            <h1 className="font-bold uppercase-wide text-4xl md-3 " >invoice</h1>
          </div>
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li>
                <button onClick={handlePrint} className="btn btn-print">
                  Print
                </button>
              </li>
              <li>
                <button className="btn btn-download">Download</button>
              </li>
              <li>
                <button className="btn btn-send">Send</button>
              </li>
            </ul>
          </div>
        </header>
        {/* End header */}

        {/* your details */}
        <section className="flex flex-col  items-end justify-end">
          <h2 className=" text-xl uppercase" >Abhishek Bhoir</h2>
          <p> Your Address</p>
        </section>
        {/* your details End */}

        {/* clinet details */}
        <section className="mt-5" >
          <h2 className=" text-xl uppercase">Client's Name</h2>
          <p>Client's Address</p>
        </section>
        {/* end cliendt details */}

        {/* Dates */}
        <section>
          <article className="my-5 flex items-end justify-end" >
            <ul>
              <li><span className="font-bold" >invoce number</span> </li>
              <li><span className="font-bold">Invoice Date</span></li>
              <li><span className="font-bold">Due Date's</span></li>
            </ul>
          </article>
          {/* end of dates */}
        </section>

        {/* Table */}
          <div className="my-5" > This is the tabel</div>
        {/* End of Table */}

        {/*Notes  */}
        <section className="mb-5" >
          {/* text Area */}
          <p> Notes to the clinet....</p>
        </section>
        {/* End of Notes */}

        {/* Footer */}

        <footer>
          <ul className="flex flex-wrap itmes-center justify-center" >
            <li><span className="font-bold" >Your Name:</span> Abhishek Bhoir </li>
            <li><span className="font-bold">Your Email address:</span> abhi@gfhjk</li>
            <li><span className="font-bold">Phone Number:</span>874512078</li>
            <li><span className="font-bold">Bank:</span>BHK74512 </li>
            <li><span className="font-bold">Account Holder:</span>abhishek</li>
            <li><span className="font-bold">Account Number:</span>7795422</li>
            <li><span className="font-bold">WebSite:</span>qwedfghn</li>
          </ul>
        </footer>
        {/* End of Footer */}
      </main>
    </>
  );
}

export default App;
