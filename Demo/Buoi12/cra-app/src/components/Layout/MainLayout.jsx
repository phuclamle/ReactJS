import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout({children}){
    // console.log(props);
    // const {children} = props
    return(
         <>
         <Header/>
         {children}
         <Footer/>
         </>
    )
}

export default MainLayout;