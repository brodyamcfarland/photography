"use client";

import { Inter } from "next/font/google";
import Links from "@/components/Links";
import { useState } from "react";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Bookings from "@/components/Bookings";
import { Toaster } from "react-hot-toast";

const mainFont = Inter({ weight: "400", subsets: ["latin"] });

export default function Home() {
     const [page, setPage] = useState<string>("gallery");
     return (
          <main
               className={`${mainFont.className} flex min-h-screen flex-col items-center p-2`}
          >
               <Links setPage={setPage} page={page} />
               {page === "gallery" && (
                    <>
                         <div className="max-w-md mx-auto">
                              <p className="p-4 text-sm">Gallery stuffs.</p>
                         </div>
                         <Gallery />
                    </>
               )}
               {page === "about" && (
                    <>
                         <div className="max-w-md mx-auto">
                              <p className="p-4 text-sm">About stuffs.</p>
                         </div>
                         <About />
                    </>
               )}
               {page === "bookings" && (
                    <>
                         <div className="max-w-md mx-auto">
                              <p className="p-4 text-sm">
                                   Bookings stuffs. Bookings stuffs. Bookings
                                   stuffs. Bookings stuffs. Bookings stuffs.
                                   Bookings stuffs. Bookings stuffs. Bookings
                                   stuffs. Bookings stuffs.
                              </p>
                         </div>
                         <Bookings />
                    </>
               )}
               <Toaster />
          </main>
     );
}
