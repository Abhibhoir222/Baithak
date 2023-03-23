import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";

function App() {
  const [showInvoice, SetShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddresse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebSite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [note, setNote] = useState("");

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 lg:max-w-4xl xl:mx-auto bg-white rounded shadow ">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} email={email} />
            <ClientDetails clientName={clientName}  clientAddress={clientAddress}  />
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
            <Table />
            <Notes note={note} />
            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
            />
            <button
              onClick={() => SetShowInvoice(false)}
              className=" mt-5 bg-blue-300 py-2 px-8 rounded text-white font-bold shadow border-2 border-blue-500 hover:bg-transparent 
            hover: text-blue-500 
            transition-all duration-300"
            >
              Edit information
            </button>
          </div>
        ) : (
          <>
            {/* name, address,email,phone,bank name,bank name,  client name, client address,invoice number,invoice date,dude date,notes */}
            <div className="flex flex-col justify-center">
              <label htmlFor="name">Enter Your Name</label>
              <input
                text="text"
                name="text"
                id="name"
                placeholder="Enter you name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="address">Enter Your Address</label>
              <input
                text="text"
                name="address"
                id="address"
                placeholder="Enter you address"
                value={address}
                onChange={(e) => setAddresse(e.target.value)}
              />

              <label htmlFor="email">Enter Your Email</label>
              <input
                text="text"
                name="email"
                id="email"
                placeholder="Enter you email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="website">Enter Your Website</label>
              <input
                text="url"
                name="website"
                id="website"
                placeholder="Enter you Website"
                value={website}
                onChange={(e) => setWebSite(e.target.value)}
              />

              <label htmlFor="phone">Enter Your Phone Number</label>
              <input
                text="text"
                name="phone"
                id="phone"
                placeholder="Enter you Website"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="bankName">Enter Your Bank Name</label>
              <input
                text="text"
                name="bankName"
                id="bankName"
                placeholder="Enter you Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />

              <label htmlFor="bankAccount">Enter Your Bank Account</label>
              <input
                text="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter you Bank Account"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <label htmlFor="clientName">Enter Your clientName</label>
              <input
                text="text"
                name="clientName"
                id="clientName"
                placeholder="Enter you client Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />

              <label htmlFor="clientAddress">Enter Your client Address</label>
              <input
                text="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter you client Address"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />

              <label htmlFor="invoiceNumber">invoice Number</label>
              <input
                text="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder=" Invoice Number"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />

              <label htmlFor="invoiceDate">invoice Date</label>
              <input
                text="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Invoice Date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />

              <label htmlFor="dueDate">Due Date</label>
              <input
                text="date"
                name="dueDate"
                id="dueDate"
                placeholder="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              <label htmlFor="note">Notes</label>
              <textarea
                name="note"
                id="note"
                cols="30"
                row="10"
                placeholder="Addition notes for clients"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>

              <button
                onClick={() => SetShowInvoice(true)}
                className="bg-blue-300 py-2 px-8 rounded text-white font-bold shadow border-2 border-blue-500 hover:bg-transparent 
            hover: text-blue-500 
            transition-all duration-300"
              >
                Perive Inovice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
