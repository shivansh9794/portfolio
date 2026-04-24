import localFont from "next/font/local";
import "./globals.css";
import CircularLoader from "@/components/CircularLoader";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio SHIVANSH",
  description: "created By SHIVANSH MISHRA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased m-10 scrollbar-thin scrollbar-webkit max-sm:m-1`}>

        <CircularLoader></CircularLoader>
        

        <div className="w-full grid grid-cols-4 gap-5 max-sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">

          <div className="col-span-1 w-full justify-center max-sm:hidden max-sm:w-full ">
            <Sidebar></Sidebar>
          </div>

          <div className="col-span-3 max-sm:col-span-full">
            <Navbar></Navbar>
            {children}
          </div>

        </div>

      </body>

    </html>
  );
}
