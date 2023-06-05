const Gallery = () => {
     const photos = [];

     return (
          <div className="border w-full xl:max-w-5xl lg:max-w-3xl border-black/10 bg-gray-300 shadow-lg items-center justify-center p-4 rounded-md">
               <h1 className="text-center uppercase text-xs font-semibold tracking-widest">
                    GALLERY
               </h1>
               <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 border w-full mt-4 p-4 gap-4">
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
                    <div className="h-[19rem] w-full border bg-black" />
               </div>
          </div>
     );
};

export default Gallery;
