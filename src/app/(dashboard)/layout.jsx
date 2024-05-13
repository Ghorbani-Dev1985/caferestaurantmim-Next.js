import "@/Styles/globals.css";
import Sidebar from "@/Containers/DashboardLayout/Sidebar";
import Header from "@/Containers/DashboardLayout/Header";
import {ShabnamFD} from '../../Constants/LocalFonts'
import {Shabnam} from '../../Constants/LocalFonts'


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${ShabnamFD.variable} ${Shabnam.variable} font-sans`}>
      <body>
        <section className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
          <Sidebar />
          <div className="col-span-full md:col-auto p-5 overflow-y-auto">
            <div className="w-full mx-auto min-h-screen bg-primary-50/70 rounded-[2.5rem] px-8 py-4">
              <Header />
              <div className="flex flex-col gap-y-12">{children}</div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
