import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const SocialFooter = () => {
     return (
          <div className="flex flex-col items-center justify-center p-1 border-t border-black/10 bg-gray-300 shadow-lg sticky bottom-0 z-50">
               <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-center">
                         <Image
                              src={"/mainlogo2.png"}
                              alt="main_logo"
                              height={80}
                              width={80}
                              className="object-contain"
                         />
                         <span className="text-[8px] tracking-widest opacity-75">
                              &copy; 2023
                         </span>
                    </div>
                    <Link href={"https://www.instagram.com/"} target="_blank">
                         <AiFillInstagram
                              size={32}
                              className="opacity-75 hover:opacity-100 duration-700"
                         />
                    </Link>
               </div>
          </div>
     );
};

export default SocialFooter;
