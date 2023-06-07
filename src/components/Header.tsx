import { Caveat } from "next/font/google";
import Image from "next/image";

const cursiveFont = Caveat({ subsets: ["latin"] });

const Header = () => {
     return (
          <header
               className={`${cursiveFont.className} flex items-center justify-center p-4 border-b border-black/10 bg-gray-300 shadow-lg sticky top-0 z-50`}
          >
               <Image
                    src={"/mainlogo2.png"}
                    alt="main_logo"
                    height={100}
                    width={200}
                    className="object-contain"
               />
          </header>
     );
};

export default Header;
