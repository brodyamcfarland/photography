const Bookings = () => {
     return (
          <div className="border w-full max-w-xl border-black/10 bg-gray-300 shadow-lg items-center justify-center p-4 rounded-md">
               <h1 className="text-center uppercase text-xs font-semibold tracking-widest">
                    Bookings
               </h1>
               <p className="text-gray-700 text-xs text-center pt-2">
                    Fill out the form below or reach out via email to
                    xxxxxx@gmail.com
               </p>
               <form className="flex flex-col border-black/10 border mt-3 gap-4 p-4 bg-black/20 rounded-md">
                    <div className="flex flex-col items-center">
                         <span className="px-2 text-xs font-semibold tracking-widest text-sm">
                              Name
                         </span>
                         <input
                              type="text"
                              className="pl-1 w-full rounded-md"
                         />
                    </div>
                    <div className="flex flex-col items-center">
                         <span className="px-2 text-xs font-semibold tracking-widest text-sm">
                              Number
                         </span>
                         <input
                              type="text"
                              className="pl-1 w-full rounded-md"
                         />
                    </div>
                    <div className="flex flex-col items-center">
                         <span className="px-2 text-xs font-semibold tracking-widest text-sm">
                              Message
                         </span>
                         <textarea className="h-[10rem] pl-1 w-full rounded-md" />
                    </div>
                    <button className="text-sm border-black/20 border rounded-lg bg-emerald-400 shadow-md">
                         Submit
                    </button>
               </form>
          </div>
     );
};

export default Bookings;
