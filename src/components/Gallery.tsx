import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
     const [filter, setFilter] = useState<string>("all");

     const photos = [
          {
               name: "photo1",
               genre: "portrait",
               url: "/mainlogo.png",
          },
          {
               name: "photo2",
               genre: "wedding",
               url: "",
          },
          {
               name: "photo3",
               genre: "fashion",
               url: "",
          },
          {
               name: "photo4",
               genre: "maternity",
               url: "",
          },
          {
               name: "photo5",
               genre: "portrait",
               url: "",
          },
     ];

     const filteredPhotos =
          filter === "all"
               ? photos
               : photos.filter((photo) => photo.genre === filter);

     return (
          <div className="border w-full xl:max-w-5xl lg:max-w-3xl border-black/10 bg-gray-300 shadow-lg items-center justify-center p-4 rounded-md text-xs">
               <h1 className="text-center uppercase text-xs font-semibold tracking-widest">
                    GALLERY
               </h1>
               <div className="flex items-center justify-center gap-2 p-2 mt-2">
                    <button
                         onClick={() => setFilter("all")}
                         className={`border border-black/10 px-2 py-1 rounded-md shadow-md hover:bg-gray-400 duration-700 ${
                              filter === "all" ? "bg-gray-400" : "bg-gray-300"
                         }`}
                    >
                         All
                    </button>
                    <button
                         onClick={() => setFilter("portrait")}
                         className={`border border-black/10 px-2 py-1 rounded-md shadow-md hover:bg-gray-400 duration-700 ${
                              filter === "portrait"
                                   ? "bg-gray-400"
                                   : "bg-gray-300"
                         }`}
                    >
                         Portraits
                    </button>
                    <button
                         onClick={() => setFilter("wedding")}
                         className={`border border-black/10 px-2 py-1 rounded-md shadow-md hover:bg-gray-400 duration-700 ${
                              filter === "wedding"
                                   ? "bg-gray-400"
                                   : "bg-gray-300"
                         }`}
                    >
                         Wedding
                    </button>
                    <button
                         onClick={() => setFilter("fashion")}
                         className={`border border-black/10 px-2 py-1 rounded-md shadow-md hover:bg-gray-400 duration-700 ${
                              filter === "fashion"
                                   ? "bg-gray-400"
                                   : "bg-gray-300"
                         }`}
                    >
                         Fashion
                    </button>
                    <button
                         onClick={() => setFilter("maternity")}
                         className={`border border-black/10 px-2 py-1 rounded-md shadow-md hover:bg-gray-400 duration-700 ${
                              filter === "maternity"
                                   ? "bg-gray-400"
                                   : "bg-gray-300"
                         }`}
                    >
                         Maternity
                    </button>
               </div>
               <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 border w-full mt-4 p-4 gap-4">
                    {filteredPhotos.map((photo) => {
                         return (
                              <Image
                                   src={photo.url}
                                   alt={photo.name}
                                   className="object-contain border w-full h-[18rem]"
                                   width={500}
                                   height={500}
                              />
                         );
                    })}
               </div>
          </div>
     );
};

export default Gallery;
