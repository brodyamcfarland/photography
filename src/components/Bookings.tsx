import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";

const Bookings = () => {
     const [name, setName] = useState<string>("");
     const [number, setNumber] = useState<string>("");
     const [email, setEmail] = useState<string>("");
     const [message, setMessage] = useState<string>("");
     const MYEMAIL = "hazeyphotography@gmail.com";

     const submitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (!name) {
               toast.error("Please fill out 'Name' field.");
               return;
          }
          if (!email) {
               toast.error("Please fill out 'Email' field.");
               return;
          }
          if (!number) {
               toast.error("Please fill out 'Number' field.");
               return;
          }
          if (!message) {
               toast.error("Please fill out 'Message' field.");
               return;
          }
          setName("");
          setNumber("");
          setEmail("");
          setMessage("");
          toast.success("Email Submitted!");
          // Ready for email logic
     };

     const copyToClipboard = async () => {
          try {
               await navigator.clipboard.writeText(MYEMAIL);
               toast.success("Copied to clipboard!");
          } catch (error) {
               toast.error("Failed to copy to clipboard.");
               console.error(error);
          }
     };

     return (
          <div className="border w-full max-w-xl border-black/10 bg-gray-300 shadow-lg items-center justify-center p-4 rounded-md">
               <h1 className="text-center uppercase text-xs font-semibold tracking-widest">
                    Contact
               </h1>
               <p className="text-gray-700 text-xs text-center pt-2">
                    Fill out the form or contact the below email for booking and
                    pricing questions.
               </p>
               <div className="flex flex-row border-black/10 border mt-3 bg-black/20 rounded-md justify-between">
                    <span className="bg-gray-600 text-white w-full text-center rounded-l-md">
                         hazeyphotography@gmail.com
                    </span>
                    <button
                         onClick={copyToClipboard}
                         className="flex items-center justify-center bg-gray text-xs px-4 border border-transparent hover:border-white rounded-r-md hover:bg-black/20 duration-500"
                    >
                         <FaRegCopy size={16} />
                    </button>
               </div>
               <form
                    onSubmit={submitEmail}
                    className="flex flex-col border-black/10 border mt-3 gap-4 p-4 bg-black/20 rounded-md"
               >
                    <div className="flex flex-col items-center">
                         <span className="px-2 text-xs font-semibold tracking-widest">
                              Name
                         </span>
                         <input
                              type="text"
                              className="pl-2 w-full rounded-md p-1 placeholder:opacity-50"
                              onChange={(e) => setName(e.target.value)}
                              placeholder="John Doe"
                              value={name}
                         />
                    </div>
                    <div className="flex flex-col items-center">
                         <span className="px-2 text-xs font-semibold tracking-widest">
                              Email
                         </span>
                         <input
                              type="text"
                              className="pl-2 w-full rounded-md p-1 placeholder:opacity-50"
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="johndoe@gmail.com"
                              value={email}
                         />
                    </div>
                    <div className="flex flex-col items-center">
                         <span className="px-2 text-xs font-semibold tracking-widest">
                              Number
                         </span>
                         <input
                              type="text"
                              className="pl-2 w-full rounded-md p-1 placeholder:opacity-50"
                              onChange={(e) => setNumber(e.target.value)}
                              placeholder="(000) 000-0000"
                              value={number}
                         />
                    </div>
                    <div className="flex flex-col items-center">
                         <span className="px-2 text-xs font-semibold tracking-widest">
                              Message
                         </span>
                         <textarea
                              className="h-[10rem] pl-2 w-full rounded-md p-1 placeholder:opacity-50"
                              onChange={(e) => setMessage(e.target.value)}
                              placeholder="Type of occasion, any targeted dates, pricing questions, etc."
                              value={message}
                         />
                    </div>
                    <button
                         type="submit"
                         className="text-sm border-black/20 border rounded-lg bg-emerald-400 shadow-md py-2"
                    >
                         Submit
                    </button>
               </form>
          </div>
     );
};

export default Bookings;
