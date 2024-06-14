import type { Metadata } from "next"
import {Raleway} from "next/font/google"
import "./global.css"
import { ReactNode } from "react";
import { Boxes } from "@/components/ui/bg";
import Navbar from "@/components/Navbar";
import { Provider } from "@/provider";
import ThemeSwitch from "@/components/themeSwitch";
const raleway = Raleway({subsets:["latin"]});
export const metadata :Metadata={
    title:"Komal's Portfolio",
    description:"Next generation modern Komal's portfolio",
    icons: "images/komalportfolio.jpg"
    
}
const layout = ({children}:{children:ReactNode})=>{
 return (
    <html lang="en" suppressHydrationWarning>
    <body>
      <Provider>
      <Navbar/>
      {children}
     
      </Provider>
    </body>
    </html>
 )
}

export default layout