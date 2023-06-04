"use client";

import { Inter } from "next/font/google";
import Links from "@/components/Links";
import { useState } from "react";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Bookings from "@/components/Bookings";

const mainFont = Inter({ weight: "400", subsets: ["latin"] });

export default function Home() {
     const [page, setPage] = useState<string>("gallery");
     return (
          <main
               className={`${mainFont.className} flex min-h-screen flex-col items-center p-2`}
          >
               <Links setPage={setPage} />
               <div className="max-w-md mx-auto">
                    <p className="p-4 text-sm">
                         Something something something something something
                         something something something something something
                         something something something something something
                         something something something something.
                    </p>
               </div>
               {page === "gallery" && <Gallery />}
               {page === "about" && <About />}
               {page === "bookings" && <Bookings />}
          </main>
     );
}
