export default function Header({handlePrint}){
    return(
        <>
            {/* Header */}
        <header className="flex flex-col items-center justify-center md-5 xl:flex-row xl:justify-between ">
          <div>
            <h1 className="font-bold uppercase-wide text-4xl md-3 " >invoice</h1>
          </div>
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li>
                <button onClick={handlePrint} className="bg-geay-300 py-2 px-8 rounded text-white font-bold shadow border-2 border-blue-500 hover:bg-transparent 
            hover: text-blue-500 
            transition-all duration-300">
                  Print
                </button>
              </li>
              <li className="mx-2" >
                <button className="bg-blue-300 py-2 px-8 rounded text-white font-bold shadow border-2 border-blue-500 hover:bg-transparent 
            hover: text-blue-500 
            transition-all duration-300">Download</button>
              </li>
              <li>
                <button className="bg-green-300 py-2 px-8 rounded text-white font-bold shadow border-2 border-blue-500 hover:bg-transparent 
            hover: text-blue-500 
            transition-all duration-300">Send</button>
              </li>
            </ul>
          </div>
        </header>
        {/* End header */}
        </>
    )
}