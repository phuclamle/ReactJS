import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import NavbarMangerment from "../components/Dashboard/NavbarManagerment/NavbarManagement";
import Menu from "../components/Dashboard/Menu/Menu";
import { MdOutlineMenu } from "react-icons/md";

export default function AdminLayout({children}){
    const [navbar,setNavbar] = useState(false)
  
    return(
       <>
       <NavbarMangerment/>
       <MdOutlineMenu role="button" onClick={()=>setNavbar(!navbar)} size={35} className=""/>
    
            <Menu navbar={navbar} setNavbar={setNavbar}/>
           
        {children}
        <Footer/>
       </>
    )
}