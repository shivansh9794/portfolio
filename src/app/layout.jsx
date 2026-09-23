// import localFont from "next/font/local";
// import "./globals.css";
// import CircularLoader from "@/components/CircularLoader";
// import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/Sidebar";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Portfolio SHIVANSH",
//   description: "created By SHIVANSH MISHRA",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased m-10 scrollbar-thin scrollbar-webkit max-sm:m-1`}>

//         <CircularLoader/>


//           <div className="w-full grid grid-cols-4 gap-5 max-sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">

//             <div className="col-span-1 w-full justify-center max-sm:hidden max-sm:w-full ">
//               <Sidebar></Sidebar>
//             </div>

//             <div className="col-span-3 max-sm:col-span-full">
//               <Navbar></Navbar>
//               {children}
//             </div>

//           </div>
//       </body>
//     </html>
//   )
// }



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
  title: "Shivansh Mishra | Full Stack Developer",
  description:
    "Portfolio of Shivansh Mishra — Full Stack Developer, Java Developer and MERN Stack Developer.",
  keywords: [
    "Shivansh Mishra",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Java Developer",
    "React Developer",
    "Next.js Developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >

        <CircularLoader />

        <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 gap-6 p-4 md:p-6 lg:grid-cols-[300px_1fr]">

          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Main */}
          <main className="min-w-0">
            <Navbar />

            {children}
          </main>

        </div>

      </body>
    </html>
  );
}