import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
     title: "Hazey Photography",
     description: "Collections and bookings for Hazey Photography.",
};

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html lang="en">
               <body className="bg-gradient-to-b from-white to-[#727272] scrollbar-thin scrollbar-rounded-md scrollbar-thumb-gray-500 scrollbar-track-gray-900">
                    <Header />
                    {children}
               </body>
          </html>
     );
}
