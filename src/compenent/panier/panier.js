import { useSelector } from "react-redux";

function Panier() {
  const panier  =  useSelector((state)=>state.panier)
  return (

    <div className="relative">
      <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center absolute top-0 right-0 -mt-2 -mr-2">{panier}</span>
      <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2zm3 2a3 3 0 110-6 3 3 0 010 6zm1 8a1 1 0 100-2 1 1 0 000 2z"></path>
      </svg>
    </div>
  );
}

export default Panier;