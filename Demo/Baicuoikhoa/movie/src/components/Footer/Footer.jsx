import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer(){
    return(
        <>
         <div className="bg-black text-white d-flex align-items-center flex-column pt-3">  
        <div className="d-flex gap-5 fs-3 mb-2">
            <FaFacebook/> <FaInstagram/> <FaTwitter/> </div>
               <div>
                phuclamle08@gmail.com
               </div>
        </div>
        </>
       
    )
}

export default Footer