import { Dispatch, SetStateAction } from "react";

interface LinkProps {
     setPage: Dispatch<SetStateAction<string>>;
     page: string;
}

const Links = ({ setPage, page }: LinkProps) => {
     return (
          <div className="text-sm tracking-widest flex gap-2 md:gap-5 items-center justify-center top-[9.1rem] z-50 sticky">
               <button
                    onClick={() => setPage("about")}
                    className={`border text-center px-6 md:px-10 border-black/10  w-full shadow-lg hover:bg-gray-400 duration-1000 rounded-lg ${
                         page === "about" ? "bg-gray-400" : "bg-gray-300"
                    }`}
               >
                    About
               </button>
               <button
                    onClick={() => setPage("gallery")}
                    className={`border text-center px-6 md:px-10 border-black/10  w-full shadow-lg hover:bg-gray-400 duration-1000 rounded-lg ${
                         page === "gallery" ? "bg-gray-400" : "bg-gray-300"
                    }`}
               >
                    Gallery
               </button>
               <button
                    onClick={() => setPage("bookings")}
                    className={`border text-center px-6 md:px-10 border-black/10 w-full shadow-lg hover:bg-gray-400 duration-1000 rounded-lg ${
                         page === "bookings" ? "bg-gray-400" : "bg-gray-300"
                    }`}
               >
                    Contact
               </button>
          </div>
     );
};

export default Links;
