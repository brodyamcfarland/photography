const About = () => {
     return (
          <div className="border w-full max-w-xl border-black/10 bg-gray-300 shadow-lg items-center justify-center p-4 rounded-md">
               <h1 className="text-center uppercase text-xs font-semibold tracking-widest">
                    ABOUT
               </h1>
               <p className="text-gray-700 text-xs text-center pt-2 pb-10">
                    Something amazing about yourself and your passion for
                    photography.
               </p>
               <h1 className="text-center uppercase text-xs font-semibold tracking-widest">
                    Pricing
               </h1>
               <div className="text-gray-700 text-xs text-center pt-2 pb-10">
                    <p>
                         Please reach out for more pricing information in the
                         contact section or by email. Pricing is determined on a
                         case by case basis depending on the following factors:
                    </p>
                    <ul className="flex flex-col items-start max-w-xs mx-auto bg-black/10 p-3 mt-2 border">
                         <li className="flex flex-row">
                              <span className="font-bold pr-2">1.</span>
                              <span>Occassion or Event Type</span>
                         </li>
                         <li className="flex flex-row">
                              <span className="font-bold pr-2">2.</span>
                              <span>Props requested or used</span>
                         </li>
                         <li className="flex flex-row">
                              <span className="font-bold pr-2">3.</span>
                              <span>Location / Distance</span>
                         </li>
                    </ul>
               </div>
               <h1 className="text-center uppercase text-xs font-semibold tracking-widest">
                    BOOKING
               </h1>
               <p className="text-gray-700 text-xs text-center pt-2 pb-10 px-4">
                    Feel free to reach out via the{" "}
                    <span className="font-bold">'Contact'</span> tab or send an
                    email to{" "}
                    <span className="underline font-semibold">
                         hazeyphotography@gmail.com
                    </span>
                    .
               </p>
          </div>
     );
};

export default About;
